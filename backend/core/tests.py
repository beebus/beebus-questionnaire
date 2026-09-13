from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status

from .models import Questionnaire


class QuestionnaireModelTest(TestCase):
    def test_str_returns_name(self):
        q = Questionnaire.objects.create(name="Alice", color="blue", movie="Dune")
        self.assertEqual(str(q), "Alice")


class QuestionnaireViewTest(APITestCase):
    def test_post_valid_data_creates_questionnaire(self):
        response = self.client.post(
            "/api/questionnaire/",
            {"name": "Bob", "color": "green", "movie": "Arrival"},
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Questionnaire.objects.count(), 1)
        self.assertEqual(Questionnaire.objects.get().name, "Bob")

    def test_post_missing_field_returns_400(self):
        response = self.client.post(
            "/api/questionnaire/",
            {"name": "Bob", "color": "green"},
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(Questionnaire.objects.count(), 0)


class ResultsViewTest(APITestCase):
    def test_get_returns_all_questionnaires(self):
        Questionnaire.objects.create(name="Alice", color="blue", movie="Dune")
        Questionnaire.objects.create(name="Bob", color="green", movie="Arrival")

        response = self.client.get("/api/results/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)
        names = {item["name"] for item in response.data}
        self.assertEqual(names, {"Alice", "Bob"})

    def test_get_returns_empty_list_when_no_data(self):
        response = self.client.get("/api/results/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, [])

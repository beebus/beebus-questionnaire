# Generated by Django 4.2.14 on 2024-07-19 03:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0002_message_delete_react"),
    ]

    operations = [
        migrations.CreateModel(
            name="Questionnaire",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("color", models.CharField(max_length=255)),
                ("movie", models.CharField(max_length=255)),
            ],
        ),
        migrations.DeleteModel(name="Message",),
    ]

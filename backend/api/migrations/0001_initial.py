# Generated by Django 5.2.3 on 2025-07-02 01:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Members",
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
                ("email_id", models.EmailField(blank=True, max_length=254, null=True)),
                ("first_name", models.CharField()),
                ("last_name", models.CharField(blank=True, null=True)),
                ("phone_number", models.IntegerField(max_length=10)),
                ("dob", models.DateField()),
                ("gender", models.CharField()),
                ("address", models.CharField(max_length=200)),
                ("created", models.DateTimeField(auto_now=True)),
            ],
        ),
    ]

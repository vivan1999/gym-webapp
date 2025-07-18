# Generated by Django 5.2.3 on 2025-07-04 01:43

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0004_alter_members_options"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Membership",
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
                ("title", models.CharField(max_length=100)),
                ("months", models.IntegerField()),
                ("price", models.IntegerField()),
                ("benefits", models.CharField(blank=True, null=True)),
            ],
            options={
                "ordering": ["price"],
            },
        ),
        migrations.AddField(
            model_name="members",
            name="add_on_services",
            field=models.CharField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="members",
            name="medical_condition",
            field=models.CharField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="members",
            name="medications",
            field=models.CharField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="members",
            name="payment_utr",
            field=models.CharField(blank=True),
        ),
        migrations.AddField(
            model_name="members",
            name="user",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.AlterField(
            model_name="members",
            name="phone_number",
            field=models.IntegerField(),
        ),
        migrations.AddField(
            model_name="members",
            name="membership",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="api.membership",
                verbose_name="membership_selected",
            ),
        ),
    ]

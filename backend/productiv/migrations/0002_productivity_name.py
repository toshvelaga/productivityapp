# Generated by Django 2.0.1 on 2019-12-29 23:04

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('productiv', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='productivity',
            name='name',
            field=models.CharField(default=django.utils.timezone.now, max_length=30),
            preserve_default=False,
        ),
    ]
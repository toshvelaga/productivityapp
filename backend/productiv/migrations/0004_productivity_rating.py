# Generated by Django 3.0.1 on 2020-01-05 05:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productiv', '0003_auto_20200104_2244'),
    ]

    operations = [
        migrations.AddField(
            model_name='productivity',
            name='rating',
            field=models.IntegerField(default=0),
        ),
    ]

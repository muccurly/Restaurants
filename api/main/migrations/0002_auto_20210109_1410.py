# Generated by Django 3.1.5 on 2021-01-09 08:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='restaurant',
        ),
        migrations.AddField(
            model_name='restaurant',
            name='genre',
            field=models.CharField(default=None, max_length=150),
        ),
        migrations.AddField(
            model_name='restaurant',
            name='reviews',
            field=models.ManyToManyField(default=None, to='main.Review'),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='description',
            field=models.TextField(default=None),
        ),
    ]
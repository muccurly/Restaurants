# Generated by Django 3.1.5 on 2021-01-08 15:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Kitchen',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название')),
            ],
        ),
        migrations.CreateModel(
            name='PlaceInMap',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('longitude', models.DecimalField(decimal_places=15, max_digits=30)),
                ('latitude', models.DecimalField(decimal_places=15, max_digits=30)),
            ],
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('photograph', models.TextField()),
                ('address', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=15, max_digits=30)),
                ('kitchen', models.ManyToManyField(default=None, to='main.Kitchen')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('date', models.CharField(max_length=255)),
                ('comments', models.TextField()),
                ('restaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='main.restaurant')),
            ],
        ),
    ]

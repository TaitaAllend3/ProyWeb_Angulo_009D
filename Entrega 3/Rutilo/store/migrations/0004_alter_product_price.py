# Generated by Django 5.0.1 on 2024-03-25 20:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.IntegerField(),
        ),
    ]

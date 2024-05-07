# Generated by Django 5.0.4 on 2024-05-07 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0033_user_messages_user_read_messages'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='read_messages',
        ),
        migrations.AddField(
            model_name='user',
            name='unread_messages',
            field=models.JSONField(blank=True, default=list),
        ),
    ]
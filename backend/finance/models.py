from django.db import models

class Transaction(models.Model):
    CATEGORY_CHOICES = [
        ("Food", "Food"),
        ("Transport", "Transport"),
        ("Health", "Health"),
        ("Utilities", "Utilities"),
        ("Entertainment", "Entertainment"),
        ("Other", "Other")
    ]

    title = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    date = models.DateField(auto_now_add=True)
    currency = models.CharField(max_length=5, default="USD")

    def __str__(self):
        return f"{self.title} ({self.amount} {self.currency})"
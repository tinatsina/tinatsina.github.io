# Apple API Documentation

## Overview

The Apple API provides a set of endpoints to interact with apple-related data. This includes information about different types of apples, their nutritional values, and recipes that use apples.

## Endpoints

### 1. Get All Apples

**Endpoint:** `/api/apples`

**Method:** `GET`

**Description:** Retrieves a list of all available apples.

**Response:**

```json
[
    {
        "id": 1,
        "name": "Granny Smith",
        "color": "Green",
        "taste": "Tart"
    },
    {
        "id": 2,
        "name": "Red Delicious",
        "color": "Red",
        "taste": "Sweet"
    }
]
```

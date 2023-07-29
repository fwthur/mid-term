## Installation / Deployment Guide

This project provides an API and it is containerized using Docker for easy deployment. Follow the steps below to set up the application:

### Prerequisites

1. Docker and Docker Compose must be installed on your system. If you haven't installed them, you can download and install Docker Desktop from the official website: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

### Step 1: Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/fwthur/mid-term
```

### Step 2: Configure Environment Variables

1. Navigate to the root directory of the project and locate the `.env.example` file.
2. Create a new file named `.env` and copy the contents of `.env.example` into it.
3. Modify the environment variables in the `.env` file as per your configuration. Set appropriate values for variables such as database credentials, API keys, etc.

### Step 3: Build and Run the Application

1. Open a terminal (or command prompt) and navigate to the root directory of the project.
2. Execute the following command to build the Docker images and start the containers:

```bash
docker-compose up -d
```

The `-d` flag runs the containers in detached mode, allowing you to continue using the terminal for other tasks.

### Step 4: Access the Application

Once the containers are up and running, you can access the application by opening a web browser and entering the following URL:

```
http://localhost:8000
```

Congratulations! You have successfully deployed the application using Docker.

### Stopping the Application

To stop the application and shut down the Docker containers, execute the following command in the root directory of the project:

```bash
docker-compose down
```

This will stop and remove the containers while preserving your data and configuration.

### Troubleshooting

- If you encounter any issues during the installation or deployment process, please refer to the application's documentation or reach out to the project maintainers for support.
- Ensure that port 8000 is available and not being used by other applications on your system. If needed, you can modify the port mapping in the `docker-compose.yml` file.

Note: This README assumes basic familiarity with Docker and Docker Compose. If you are new to Docker, consider reading the Docker documentation to gain a better understanding of containerization and its usage: [https://docs.docker.com/](https://docs.docker.com/)

# API Documentation

This document provides detailed information about the endpoints available in the API. The API allows users to interact with live videos, comments, and associated products.

## Base Route

The base route for all API endpoints below is:

```
/api/v1/
```

## Endpoint: /seed

**Description**

This endpoint is used to generate seed data in the database. Seed data can be used to populate the database with sample data for testing and development purposes.

**Request**

- Method: POST
- Route: /seed

**Response**

Success Response:

```json
{
  "code": 200,
  "status": "success",
  "message": "Seed data success"
}
```

## Endpoint: /live_videos

**Description**

This endpoint is used to retrieve all live videos available.

**Request**

- Method: GET
- Route: /live_videos

**Response**

Success Response:

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "_id": "liveVideoId1",
      "videoImageUrl": "https://example.com/thumbnails/video1.jpg",
      "videoTitle": "Live Video 1",
      "videoUsername": "user1"
    },
    {
      "_id": "liveVideoId2",
      "videoImageUrl": "https://example.com/thumbnails/video2.jpg",
      "videoTitle": "Live Video 2",
      "videoUsername": "user2"
    }
    // More live video objects...
  ],
  "message": "Retrieved all live videos"
}
```

## Endpoint: /live_video/:id

**Description**

This endpoint is used to retrieve the detailed information of a single live video based on its unique ID.

**Request**

- Method: GET
- Route: /live_video/:id

**Response**

Success Response:

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "_id": "liveVideoId1",
    "videoImageUrl": "https://example.com/thumbnails/video1.jpg",
    "videoTitle": "Live Video 1",
    "videoUsername": "user1"
    // Additional live video details...
  },
  "message": "Retrieved live video details"
}
```

## Endpoint: /live_video/:id/comments

**Description**

This endpoint is used to retrieve all comments associated with a specific live video based on its unique ID.

**Request**

- Method: GET
- Route: /live_video/:id/comments

**Response**

Success Response:

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "_id": "commentId1",
      "comment": "This is a comment.",
      "avatar": "https://example.com/avatars/avatar1.jpg",
      "username": "user1"
    },
    {
      "_id": "commentId2",
      "comment": "Another comment.",
      "avatar": "https://example.com/avatars/avatar2.jpg",
      "username": "user2"
    }
    // More comment objects...
  ],
  "message": "Retrieved all comments for the live video"
}
```

## Endpoint: /live_video/:id/products

**Description**

This endpoint is used to retrieve all products associated with a specific live video based on its unique ID.

**Request**

- Method: GET
- Route: /live_video/:id/products

**Response**

Success Response:

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "_id": "productId1",
      "productName": "Product 1",
      "productPrice": "29.99",
      "productLink": "https://example.com/products/product1",
      "productImageUrl": "https://example.com/images/product1.jpg"
    },
    {
      "_id": "productId2",
      "productName": "Product 2",
      "productPrice": "19.99",
      "productLink": "https://example.com/products/product2",
      "productImageUrl": "https://example.com/images/product2.jpg"
    }
    // More product objects...
  ],
  "message": "Retrieved all products for the live video"
}
```

## Endpoint: /live_video/:id/comment

**Description**

This endpoint is used to post a new comment on a specific live video based on its unique ID.

**Request**

- Method: POST
- Route: /live_video/:id/comment

**Body Parameters**:

- comment: String (required) - The content of the comment.
- avatar: String (required) - URL or path to the user's avatar image.
- username: String (required) - Username of the user posting the comment.

**Response**

Success Response:

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "_id": "newCommentId",
    "comment": "

This is a new comment.",
    "avatar": "https://example.com/avatars/avatar3.jpg",
    "username": "user3"
  },
  "message": "Comment posted successfully"
}
```

Error Response:

```json
{
  "code": 400,
  "status": "failed",
  "error": "Invalid request data"
}
```


# Database Documentation

The database is a NoSQL database based on MongoDB, designed to efficiently handle data related to live videos, products, and user comments. The database consists of three collections: `liveVideo`, `product`, and `Comment`. Each collection has specific fields that store relevant information.

## Collections

### 1. liveVideo Collection

The `liveVideo` collection stores information about live videos available.

**Field Name** | **Data Type** | **Description**
--- | --- | ---
_id | ObjectId | Unique identifier for the live video.
videoImageUrl | String | URL of the video thumbnail image.
videoTitle | String | Title of the live video.
videoUsername | String | Username of the user who posted the video.

### 2. product Collection

The `product` collection stores information about products available.

**Field Name** | **Data Type** | **Description**
--- | --- | ---
_id | ObjectId | Unique identifier for the product.
productName | String | Name of the product.
productPrice | String | Price of the product.
productLink | String | URL link to the product.
productImageUrl | String | URL of the product image.
liveVideoId | ObjectId (Reference) | Reference to the `liveVideo` collection.

### 3. Comment Collection

The `Comment` collection stores comments posted by users on live videos.

**Field Name** | **Data Type** | **Description**
--- | --- | ---
_id | ObjectId | Unique identifier for the comment.
comment | String | Content of the comment.
avatar | String | URL or path to the user's avatar image.
username | String | Username of the user who posted the comment.
liveVideoId | ObjectId (Reference) | Reference to the `liveVideo` collection.

## Relationships

The database has the following relationships between collections:

### One-to-Many Relationship:

1. One liveVideo can have multiple product documents associated with it. The `liveVideoId` in the `product` collection references the corresponding liveVideo.
2. One liveVideo can have multiple Comment documents associated with it. The `liveVideoId` in the `Comment` collection references the corresponding liveVideo.

## Database Management

The database is based on MongoDB, a powerful NoSQL database. Collections and documents are managed within MongoDB, and relationships are represented using references. This database design allows for efficient storage and retrieval of live video data, product information, and user comments.

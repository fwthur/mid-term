# GigihStream API

## Installation / Deployment Guide

This project provides an API for GigihStream, and it is containerized using Docker for easy deployment. Follow the steps below to set up the application:

### Prerequisites

1. Docker and Docker Compose must be installed on your system. If you haven't installed them, you can download and install Docker Desktop from the official website: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

### Step 1: Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/radityafs/Gigih-Final-Exam/
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

Congratulations! You have successfully deployed the GigihStream application using Docker.

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

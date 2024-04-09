````markdown
# Sann Opticals Limited Website

## Running Locally

To run the application locally, follow these steps:

1. Navigate to the `sann-opticals` directory.
2. Run `npm install` to install all necessary dependencies from `package.json`.
3. Run `npm run dev` to start your Node.js environment.

## Running the Containerized Application Locally

This is a Next.js application that has been containerized using Docker. Follow these steps:

1. Build the Docker image:
   ```bash
   docker build -t sann-opticals .
   ```
````

2. Run a container from the image:
   ```bash
   docker run -d -p 3005:3005 sann-opticals:latest
   ```

## Hosting the Image in AWS ECR

The built image can be stored in either a public or private ECR. In this example, a public repo is used. CloudFormation templates for both environments are provided in the root of the project to create an ECR where images can be hosted. After this, push your image to the public repo. Make sure you have `aws-cli` installed before doing this.

## Running it in Kubernetes

In this project, the deployment was also implemented using Kubernetes running in a local machine using Minikube. Follow these steps:

1. Start Minikube:
   ```bash
   minikube start
   ```
2. Run the alias to make it easier to run commands with `kubectl`:
   ```bash
   alias kubectl="minikube kubectl --"
   ```
3. Apply the deployment configuration (found in `/k8s/deployment.yaml`):
   ```bash
   kubectl apply -f k8s/deployment.yaml
   ```
4. Apply the service configuration (found in `/k8s/service.yaml`):
   ```bash
   kubectl apply -f k8s/service.yaml
   ```
5. Get the `sann-opticals` service from the list of running services:
   ```bash
   kubectl get services
   ```
6. Get the service URL:
   ```bash
   minikube service sann-opticals --url
   ```

The output will be something like this: `http://192.168.49.2:31616` - open it in the browser.

Congratulations, you've just deployed a Next.js application to Kubernetes.

```

```

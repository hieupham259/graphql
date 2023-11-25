Host application with Minikube
1. Create a 2 Nodes Cluster (1 control plane and 1 worker node):
- minikube start --nodes # 2 express-cluster.
2. Set a node in this cluster as a worker:
- kubectl label node express-cluster-m02 node-role.kubernetes.io/worker=worker.
3. Apply a key:value label to the worker nodes:
- kubectl label nodes express-cluster-m02 role=worker.
4. Create deployment use deployment yaml file:
- kubectl apply -f .\k8s-deployment.yaml
5. Create service use deployment yaml file:
- kubectl apply -f .\k8s-service.yaml
6. Run health check api on the browser for testing:
- minikube service express-graphql-service
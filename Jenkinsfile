pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
      }
    }
    stage('Package') {
      steps {
        // Package the TypeScript build artifacts into a JAR file
        sh 'mvn package'
      }
    }
    stage('Deploy') {
      steps {
        script {
          openshift.withCluster() {
            openshift.withProject("patrick-pereira-dev") {
              // Check if the deployment config exists
              def deploymentConfigExists = openshift.selector("dc", "meteo10Villes").exists()

              // If deployment config doesn't exist, create a new one
              if(!deploymentConfigExists){
                openshift.newApp('meteo10Villes').narrow('svc').expose()
              }

              // Start a new build using the Maven JAR artifact
              openshift.selector("bc", "meteo10Villes").startBuild("--from-file=target/your-artifact.jar", "--follow")
            }
          }
        }
      }
    }
  }
}

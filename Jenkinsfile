pipeline {

  agent {
    label 'maven'
  }

  stages {
    stage('Build') {
      steps {
        echo 'Building..'

        sh 'mvn clean package'
        
      }
    }
    stage('Create Container Image') {
      steps {
        echo 'Create Container Image..'
        
        script {
          openshift.withCluster() {
            openshift.withProject("patrick-pereira-dev") {
                def buildConfigExists = openshift.selector("bc", "meteo10Villes").exists()

                if(!buildConfigExists){
                    openshift.newBuild("--name=meteo10Villes", "--docker-image=registry.redhat.io/jboss-eap-7/eap74-openjdk8-openshift-rhel7", "--binary")
                }

                openshift.selector("bc", "meteo10Villes").startBuild("--from-file=target/simple-servlet-0.0.1-SNAPSHOT.war", "--follow")

            }

          }
        }
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying....'
        script {
          openshift.withCluster() {
            openshift.withProject("patrick-pereira-dev") {

              def deployment = openshift.selector("dc", "meteo10Villes")

              if(!deployment.exists()){
                openshift.newApp('meteo10Villes', "--as-deployment-config").narrow('svc').expose()
              }

              timeout(5) { 
                openshift.selector("dc", "meteo10Villes").related('pods').untilEach(1) {
                  return (it.object().status.phase == "Running")
                  }
                }

            }

          }
        }
      }
    }
  }
}

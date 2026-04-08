pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/jothiganesh69/scm.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Digital Twin Test') {
            steps {
                sh 'node test.js'
            }
        }

        stage('Build') {
            steps {
                echo 'Build Successful'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Application...'
            }
        }
    }
}

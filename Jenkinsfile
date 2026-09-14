pipeline {
    agent any
    environment {
    PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
}

    stages {
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}

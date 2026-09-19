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

        stage('Package') {
            steps {
                sh 'tar -czf employee-app.tar.gz app.js package.json dist'
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: 'employee-app.tar.gz', fingerprint: true
        }
    }
}

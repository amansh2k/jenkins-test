pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
        AZURE_TENANT_ID = "a24c2c0b-33b9-4c2e-ac6b-55bbc05a87b3"
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
                sh '''
                    rm -f employee-app.tar.gz employee-app.zip

                    tar -czf employee-app.tar.gz \
                        app.js package.json dist

                    zip -r employee-app.zip \
                        app.js package.json dist
                '''
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'employee-app.tar.gz,employee-app.zip',
                                 fingerprint: true
            }
        }

        stage('Deploy to Azure') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'AzureServicePrincipal',
                        usernameVariable: 'AZURE_CLIENT_ID',
                        passwordVariable: 'AZURE_CLIENT_SECRET'
                    )
                ]) {
                    sh '''
                        az login \
                            --service-principal \
                            --username "$AZURE_CLIENT_ID" \
                            --password "$AZURE_CLIENT_SECRET" \
                            --tenant "$AZURE_TENANT_ID" \
                            --output none

                        az webapp deploy \
                            --resource-group jenkins-node-app-aman_group \
                            --name jenkins-node-app-aman \
                            --src-path employee-app.zip \
                            --type zip
                    '''
                }
            }
        }
    }

    post {
        always {
            sh 'az logout || true'
        }
    }
}

pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
				echo 'In REACT Test Stage ...nothing to test yet'
            }
        }
		stage('Deploy') {
            steps {
				sh 'docker-compose build'
				sh 'docker-compose run'
            }
        }
    }
}
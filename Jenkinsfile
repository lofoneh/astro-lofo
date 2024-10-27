pipeline {
  agent {
    docker {
      image 'node'
    }

  }
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/MrLofo7/portofolio_website/tree/dev', branch: 'dev')
        echo 'Locked in ready to fire..'
      }
    }

  }
}
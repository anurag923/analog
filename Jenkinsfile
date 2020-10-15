node(){
     stage('Cloning Git') {
        checkout scm
     }
      
     stage('Install dependencies') {
        nodejs('nodejs') {
            sh 'npm install'
            echo "Modules installed"
        }
     }
     stage('Build') {
        nodejs('nodejs') {
            sh 'ng build'
            echo "Build completed"
        }
     }

     stage('Package Build') {
        sh "tar -zcvf bundle.zip dist/NovitaHealthTech/*"
     }

     stage('Artifacts Creation') {
        fingerprint 'bundle.zip'
        archiveArtifacts 'bundle.zip'
        echo "Artifacts created"
     }

     stage('Stash changes') {
        stash allowEmpty: true, includes: 'bundle.zip', name: 'bundleArtifacts'
     }
}

node('novita') {
    echo 'Unstash'
    unstash 'bundleArtifacts'
    echo 'Artifacts copied'

    echo 'Copy'
    sh "yes | sudo cp -R bundle.zip /var/www/html && cd /var/www/html && sudo tar -xvf bundle.zip && sudo mv /var/www/html/dist/NovitaHealthTech/* ./ "
    echo 'Copy completed'
}

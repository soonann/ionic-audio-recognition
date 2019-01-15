import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  val : string []
  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition) {
    this.speechRecognition.requestPermission()
.then(
  () => alert('Granted'),
  () => alert('Denied')
)
  }
  
  

  start(){
    
// Check feature available
this.speechRecognition.isRecognitionAvailable()
.then((available: boolean) => console.log(available))

// Start the recognition process
this.speechRecognition.startListening()
.subscribe(
  (matches: Array<string>) => {this.val = matches},
  (onerror) => alert('error:'+ onerror)
)
}


// // Get the list of supported languages
// this.speechRecognition.getSupportedLanguages()
// .then(
//   (languages: Array<string>) => console.log(languages),
//   (error) => console.log(error)
// )

// // Check permission
// this.speechRecognition.hasPermission()
// .then((hasPermission: boolean) => console.log(hasPermission))


  stop(){

    
// Stop the recognition process (iOS only)
    this.speechRecognition.stopListening();
  }

}

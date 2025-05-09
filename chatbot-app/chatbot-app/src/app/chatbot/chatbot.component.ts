import { Component } from '@angular/core';
import { ChatbotService } from './chatbot.service';  // Import the service

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  //styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  userInput: string = '';
  messages: { text: string, type: string }[] = [];

  constructor(private chatbotService: ChatbotService) {}

  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput, type: 'user' });
      const message = this.userInput.trim();
      this.userInput = '';

      this.getAiResponse(message);
    }
  }

  getAiResponse(message: string) {
    this.chatbotService.getTestCount(message).subscribe(response => {
      this.messages.push({ text: response.result, type: 'ai' });
    }, error => {
      this.messages.push({ text: 'Error retrieving test count.', type: 'ai' });
    });
  }
}

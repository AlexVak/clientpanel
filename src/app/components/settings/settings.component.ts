import {Component, OnInit} from '@angular/core';
import {Settings} from '../../models/Settings';
import {SettingsService} from '../../services/settings.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: Settings;

  constructor(
    private settingsService: SettingsService,
    private messagesService: FlashMessagesService
  ) {
  }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.messagesService.show('Settings saved', {
      cssClass: 'alert-success',
      timeout: 4000
    });
  }
}

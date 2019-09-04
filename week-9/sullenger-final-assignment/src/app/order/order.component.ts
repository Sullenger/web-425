import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-order",
  template: `
    <!-- Form -->
    <div class="container">
      <form #f="ngForm" class="inputStyle" (ngSubmit)="onSubmit(f.value)">
        <div class="mdc-form-field">
          <div class="mdc-checkbox">
            <div class="passwordReset">
              <span style="font-size: 3em; color: grey;">
                <i class="fas fa-unlock-alt"></i>
              </span>
              <label for="passwordReset">Password Reset</label>
              <input
                type="checkbox"
                id="passwordCheck"
                name="Password Reset"
                class="switch-input"
                ngModel
                checked
              />
            </div>

            <div class="spywareRemoval">
              <span style="font-size: 3em; color: grey;">
                <i class="fas fa-user-secret"></i>
              </span>
              <label for="spywareRemoval">Spyware Removal</label>
              <input
                type="checkbox"
                id="spywareCheck"
                name="Spyware Removal"
                class="switch-input"
                ngModel
                checked
              />
            </div>
            <div class="ramUpgrade">
              <span style="font-size: 3em; color: grey;">
                <i class="fas fa-memory"></i>
              </span>
              <label for="ramUpgrade">RAM Upgrade</label>
              <input
                type="checkbox"
                id="ramUpgrade"
                name="RAM Upgrade"
                class="switch-input"
                ngModel
                checked
              />
            </div>

            <div class="installation">
              <span style="font-size: 3em; color: grey;">
                <i class="fas fa-download"></i>
              </span>
              <label for="softInstallation">Software Installation</label>
              <input
                type="checkbox"
                id="softInstallation"
                name="Software Installation"
                class="switch-input"
                ngModel
                checked
              />
            </div>

            <div class="tuneUp">
              <span style="font-size: 3em; color: grey;">
                <i class="fas fa-tachometer-alt"></i>
              </span>
              <label for="softInstallation">Tune-Up</label>
              <input
                type="checkbox"
                id="tuneUp"
                name="Tune-Up"
                class="switch-input"
                ngModel
                checked
              />
            </div>

            <div class="cleaning">
              <span style="font-size: 3em; color: grey;">
                <i class="fas fa-broom"></i>
              </span>
              <label for="softInstallation">Disk Clean-Up</label>
              <input
                type="checkbox"
                id="cleaning"
                name="Disk Clean-Up"
                class="switch-input"
                ngModel
                checked
              />
            </div>

            <div class="keyboard">
              <span style="font-size: 3em; color: grey;">
                <i class="fas fa-tachometer-alt"></i>
              </span>
              <label for="softInstallation">Keyboard Clean-Up</label>
              <input
                type="checkbox"
                id="keyboard"
                name="Keyboard Clean-Up"
                class="switch-input"
                ngModel
                checked
              />
            </div>

            <div id="labor">
              <span style="font-size: 3em; color: grey;">
                <i class="fas fa-wrench"></i>
              </span>
              <label for="laborInput">Labor Costs ($50 per hour)</label>
              <select
                class="laborHours"
                id="laborInput"
                name="Labor Input"
                ngModel
              >
                <option value="" disabled selected>Select labor hours</option>
                <option value="1">1 Hour</option>
                <option value="2">2 Hours</option>
                <option value="3">3 Hours</option>
              </select>
            </div>

            <mat-form-field>
              <input type="text" name="parts" matInput ngModel />
            </mat-form-field>
          </div>
        </div>

        <br /><br />
        <button
          mat-raised-button
          class="buttonStyle"
          color="accent"
          type="submit"
          [disabled]="f.invalid"
        >
          Calculate
        </button>
      </form>
    </div>
  `,
  styles: []
})
export class OrderComponent implements OnInit {
  // https://fontawesome.com/
  // Password: unlock-alt
  // Spyware: user-secret
  // RAM: memory
  // software: download
  // Tune-up: tachometer-alt
  // Clean-up: broom
  // keyboard: keyboard
  // Labor: wrench
  constructor() {}

  ngOnInit() {}

  onSubmit(formData) {
    console.log(formData);
  }
}

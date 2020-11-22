import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
enum CheckBoxTypeSolution { Essentials, Essentials_Plus, Standard, Enterprise_Plus, Suite_Standard, Suite_Advanced, Enterprise, NONE };
enum CheckBoxTypeVirt { ServerA, ServerB, ServerC, NONE };
enum CheckBoxTypeStorage { NAS, iSCSI, FC, vSAN, NONE};
enum CheckBoxTypeElecCost { Low, Medium, High, NONE};
enum CheckBoxTypeDcCost { Low, Medium, High, NONE};

@Component({
  selector: 'app-tco-comp-calc',
  templateUrl: './tco-comp-calc.component.html',
  styleUrls: ['./tco-comp-calc.component.css']
})
export class TcoCompCalcComponent implements OnInit {
  check_box_type_solution = CheckBoxTypeSolution;
  currentlyCheckedSolution: CheckBoxTypeSolution;

  check_box_type_virt = CheckBoxTypeVirt;
  currentlyCheckedVirt = CheckBoxTypeVirt;

  check_box_type_storage = CheckBoxTypeStorage;
  currentlyCheckedStorage = CheckBoxTypeStorage;

  check_box_type_eleccost = CheckBoxTypeElecCost;
  currentlyCheckedElecCost = CheckBoxTypeElecCost;

  check_box_type_dccost = CheckBoxTypeDcCost;
  currentlyCheckedDcCost = CheckBoxTypeDcCost;

  selectedCurrency = '';
  selectedVMNumber;

  constructor() { }

  ngOnInit(): void {
  }

  selectCheckBoxSolution(targetType: CheckBoxTypeSolution) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if(this.currentlyCheckedSolution === targetType) {
      this.currentlyCheckedSolution = CheckBoxTypeSolution.NONE;
      return;
    }

    this.currentlyCheckedSolution = targetType;
  }
  
  selectCheckBoxVirt(targetType: CheckBoxTypeVirt) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if(this.currentlyCheckedStorage === targetType) {
      this.currentlyCheckedStorage = CheckBoxTypeVirt.NONE;
      return;
    }

    this.currentlyCheckedVirt = targetType;
  }

  selectCheckBoxStorage(targetType: CheckBoxTypeStorage) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if(this.currentlyCheckedStorage === targetType) {
      this.currentlyCheckedStorage = CheckBoxTypeStorage.NONE;
      return;
    }

    this.currentlyCheckedStorage = targetType;
  }

  selectCheckBoxElecCost(targetType: CheckBoxTypeElecCost) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if(this.currentlyCheckedElecCost === targetType) {
      this.currentlyCheckedElecCost = CheckBoxTypeElecCost.NONE;
      return;
    }

    this.currentlyCheckedElecCost = targetType;
  }

  selectCheckBoxDcCost(targetType: CheckBoxTypeDcCost) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if(this.currentlyCheckedDcCost === targetType) {
      this.currentlyCheckedDcCost = CheckBoxTypeDcCost.NONE;
      return;
    }

    this.currentlyCheckedDcCost = targetType;
  }

  @ViewChild('f') tcoForm: NgForm;
  onSubmit() {
      console.log(this.tcoForm);
      this.tcoForm.reset();
  }

}

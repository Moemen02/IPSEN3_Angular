import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Composition, condition } from 'src/app/models/Waste/composition.model';

@Component({
  selector: 'app-category-waste',
  templateUrl: './category-waste.component.html',
  styleUrls: ['./category-waste.component.scss']
})
export class CategoryWasteComponent implements OnInit {

  @ViewChild("formComp") ngFormComp: NgForm

  compositions: Composition[] = []

  makeNewComp = false

  errorText = " "

  conditionForm: FormGroup

  ngOnInit(): void {
    this.conditionForm = new FormGroup({
      "name": new FormControl(null, [Validators.required]),
      "color": new FormControl(null, [Validators.required]),
      "conditions": new FormArray([])
    })

    this.compositions.push(new Composition("samenstelling 1", 2323, [new condition(12, "Stof", "GreaterThan")]))
  }


  onSubmitComp() {

  }

  removeComposition(comp: Composition) {
    const index = this.compositions.indexOf(comp)
    this.compositions.splice(index, 1)
    console.log(index)
    console.log(this.compositions)
  }


  onSubmitNewComp() {
    this.errorText = " "
    if (this.conditionForm.status === "VALID") {

      if (this.conditionForm.value.conditions.length === 0) {
        this.errorText = "U moet minimaal 1 voorwaarde toevoegen"
        return
      }
      
      const comp = new Composition(
        this.conditionForm.value.name,
        this.conditionForm.value.color,
        this.conditionForm.value.conditions,
      )
      
      this.compositions.push(comp)
      console.log(this.compositions)
      this.conditionForm.reset()
      this.makeNewComp = false
    }
  }


  newComposition() {
    this.ngFormComp.reset()
    console.log("new samenstelling")
    this.makeNewComp = true
  }


  addNewRule() {
    (<FormArray>this.conditionForm.get("conditions")).push(new FormGroup({
      "condition": new FormControl(null, [Validators.required]),
      "amount": new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
      "type": new FormControl(null, [Validators.required])
    }))
  }

  removeRule(index: number) {
    const form = this.conditionForm.get('conditions') as FormArray;
    (<FormArray>this.conditionForm.get("conditions")).removeAt(index)
  }

  getControls() {
    return (<FormArray>this.conditionForm.get('conditions')).controls;
  }

  get Conditions() {
    return this.conditionForm.get('conditions') as FormArray;
  }

  ConditionsArray(index: number) {
    return this.Conditions.at(index)as FormGroup;
  }
}  
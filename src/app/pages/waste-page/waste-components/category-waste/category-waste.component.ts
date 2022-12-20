import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms'
import { WasteDataModel } from 'src/app/models/Waste/waste-data.model'
import { Composition } from 'src/app/models/Waste/composition.model'
import { CategoryWasteService } from './category-waste.service'
import { Component, OnInit, ViewChild } from '@angular/core'
import { Category } from 'src/app/models/Waste/category.model'

@Component({
  selector: 'app-category-waste',
  templateUrl: './category-waste.component.html',
  styleUrls: ['./category-waste.component.scss']
})
export class CategoryWasteComponent implements OnInit {
  @ViewChild("formComp") ngFormComp: NgForm

  compositions: Composition[] = []
  selectedComp: Composition
  conditionForm: FormGroup
  makeNewComp = false
  fullPageLength = 0
  currentPage = 0
  errorText = " "

  totalWeight = 0

  similarWasteData: Category[]

  constructor(private cws: CategoryWasteService) { }


  ngOnInit(): void {
    this.conditionForm = new FormGroup({
      "name": new FormControl(null, [Validators.required]),
      "color": new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
      "conditions": new FormArray([])
    })
    const comps = localStorage.getItem("comps")
    if (comps) this.compositions = JSON.parse(comps)


    this.cws.inComingData.subscribe(data => {
      this.currentPage = 0
      this.fullPageLength = data.headers.getAll('full_list_length')[0]
      this.similarWasteData = data.body
      
      this.similarWasteData.map(data => {
        this.totalWeight += data.weight
      })
    })

  }

  nextPage(page:number) {
    this.cws.sendComposition(this.selectedComp, page)
  }


  onSubmitComp() {
    if (this.ngFormComp.status === "VALID") {
      this.compositions.map(comp => {
        if (comp.name === this.ngFormComp.value.comp) {
          this.selectedComp = comp
        }
      })
      if (this.selectedComp) {
        this.cws.sendComposition(this.selectedComp, 0)
      }
    }
  }

  removeComposition(comp: Composition) {
    const index = this.compositions.indexOf(comp)
    this.compositions.splice(index, 1)
    localStorage.setItem("comps", JSON.stringify(this.compositions))
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

      localStorage.setItem("comps", JSON.stringify(this.compositions))
    }
  }

  goBack() {
    this.makeNewComp = false
    this.conditionForm.reset()
  }


  newComposition() {
    this.ngFormComp.reset()
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
    (<FormArray>this.conditionForm.get("conditions")).removeAt(index)
  }

  getControls() {
    return (<FormArray>this.conditionForm.get('conditions')).controls;
  }

  get Conditions() {
    return this.conditionForm.get('conditions') as FormArray;
  }

  ConditionsArray(index: number) {
    return this.Conditions.at(index) as FormGroup;
  }
}
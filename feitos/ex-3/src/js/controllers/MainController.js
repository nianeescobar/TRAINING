import { Customer } from '../models/Customer.js';
import { Customers } from '../models/Customers.js';

import { CustomersView } from '../view/CustomersView.js';

import { ObjectFactory, mapObjectNonPrefix } from '../utils/ObjectFactory.js';


export class MainController {

    // 1º O construtor é chamado!
    constructor() {
        // 2º Os atributos da classe são criados!
        this.els = {}
        this.init();
    }


    loadInputs() {  
        // Buscar todos os inputs que cotenham um id -> Collection
        const formEls = [...document.querySelectorAll("[id]")]
        formEls.forEach(formEl => {
            this.els[formEl.id] = formEl
        })
    }

    init() {
        this.loadInputs();
        this.customerList = new Customers();    
        this.customersView = new CustomersView(this.els.customerList)

        this.els.formCustomer.addEventListener('submit', $event => {
            $event.preventDefault();
            
            const obj = ObjectFactory(this.els, 
                'inputName',
                'inputSurname',
                'inputDateOfBirth',
                'inputCpf',
                'inputRoad',
                'inputNeigborhood',
                'inputCity',
                'inputCep',
                'inputState',
                'inputCountry')

            

            const customer = new Customer(mapObjectNonPrefix('input', obj));

            this.customerList.add(customer)
            this.customersView.render(this.customerList.getCustomers())
            
        })
    }
    
    
    
    removeCustomer(i) {
        console.log(i)
        this.customerList.remove(i)
        this.customersView.render(this.customerList.getCustomers())
    }

}
export default class Cl_empresa{
    constructor(){
        this.acumAumento=0;
    }
    procesarPersonal(personal){
        this.acumAumento+=personal.aumentoSueldo();

}
pagoTotal(){
    return this.acumAumento;
}
}
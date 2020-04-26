import { observable } from 'mobx'

export interface Equipment {
  boot: SymmetricEquipmentPiece
  chest: EquipmentPiece
  glove: SymmetricEquipmentPiece
  helmet: EquipmentPiece
  shoulder: SymmetricEquipmentPiece
}

interface EquipmentPiece {
  description: string
  image: string
  title: string
}

interface SymmetricEquipmentPiece {
  left: EquipmentPiece
  right: EquipmentPiece
}

class EquipmentStore {
  @observable boot: SymmetricEquipmentPiece
  @observable chest: EquipmentPiece
  @observable glove: SymmetricEquipmentPiece
  @observable helmet: EquipmentPiece
  @observable shoulder: SymmetricEquipmentPiece

  constructor(equipment: Equipment) {
    this.boot = equipment.boot
    this.chest = equipment.chest
    this.glove = equipment.glove
    this.helmet = equipment.helmet
    this.shoulder = equipment.shoulder
  }
}

export default EquipmentStore

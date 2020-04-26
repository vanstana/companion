import { observable } from 'mobx'

export interface Character {
  alignment: string
  armorClass: string
  class: string
  level: string
  name: string
}

class CharacterStore {
  @observable alignment: string
  @observable armorClass: string
  @observable class: string
  @observable level: string
  @observable name: string

  constructor(character: Character) {
    this.alignment = character.alignment
    this.armorClass = character.armorClass
    this.class = character.class
    this.level = character.level
    this.name = character.name
  }
}

export default CharacterStore

function pageLoad() {
  //Ide írjuk a feladatot!

  class Resident {
    constructor(name, age, hasRegistred = false) {
      this.name = name
      this.age = age
      this.hasRegistred = hasRegistred
    }

  }

  class VoterCounter {

  }


  /*
  Implement a canVote instance method on the Resident Class, which returns true only if the instantiated person is older than 17, and has registered.
  Then implement a static method on the VoterCounter class (getNumberOfVoters) which receives an array of person objects, and returns the count of those who can vote.
  */
}

window.addEventListener('load', pageLoad)
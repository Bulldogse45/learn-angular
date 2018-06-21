import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Matt Fair Co.', 'http://www.matthewjfair.com', 'Ruby on Rails', 150, 12, 15, 'matt.j.fair@gmail.com')
  proposalTwo: Proposal = new Proposal(15, 'Ben Fair Co.', 'http://www.google.com', 'Ruby on Rails', 150, 12, 15, 'ben.fair@gmail.com')
  proposalThree: Proposal = new Proposal(15, 'Dan Fair Co.', 'http://www.google.com', 'Ruby on Rails', 150, 12, 15, 'dan.fair@gmail.com')

  proposals: Proposal[] = [this.proposalOne, this.proposalTwo, this.proposalThree]
}
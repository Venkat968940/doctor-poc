import { AbilityBuilder, Ability } from '@casl/ability';

export function DefineAbilityFor(role) {
  const { can, cannot, build } = new AbilityBuilder(Ability);
// console.log(role)
  if (role === 'admin') {
    can('manage', 'all');  // admin can do everything
  } else if (role === 'Patient') {
    can('visit', 'Patient'); 
    cannot('visit', 'admin'); 
    cannot('visit', 'Doctor')
  }
  else if(role ==='doctor'){
    can('read','Doctor');
    cannot('visit', 'Patient')
    cannot('visit', 'admin')
  }

  return build();
}

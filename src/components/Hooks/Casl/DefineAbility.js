import { AbilityBuilder, Ability } from '@casl/ability';

export function DefineAbilityFor(role) {
  const { can, cannot, build } = new AbilityBuilder(Ability);
// console.log(role)
  if (role === 'admin') {
    can('manage', 'all');  // admin can do everything
  } else if (role === 'member') {
    can('visit', 'member'); 
    cannot('visit', 'admin'); 
    cannot('visit', 'doctor')
  }
  else if(role ==='doctor'){
    can('read','doctor');
    cannot('visit', 'member')
    cannot('visit', 'admin')
  }

  return build();
}

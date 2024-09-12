import { AbilityBuilder, Ability } from '@casl/ability';

export function defineAbilityFor(role) {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  if (role === 'admin') {
    can('manage', 'all');  // admin can do everything
  } else if (role === 'member') {
    can('read', 'member'); 
    cannot('visit', 'admin'); 
  }

  return build();
}

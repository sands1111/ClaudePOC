/**
  * The following variables are available to this script:
  *    'current'                is the task record that will be match the conditions specified in this rule
  *    'rule'                   is this trigger_rule record
  *    'trigger_group_field'    the group field to populate on current
  *    'trigger_user_field'     the user field to populate on current
  *    'journal_field'          the journal field to populate on current
  * 
  * Example Usage:
  * 
  * current[journal_field].setJournalEntry('Trigger Rule is being applied: ' + rule.name);
  * current.setValue(trigger_group_field, rule.group);
  * current.update();
  * 
  */


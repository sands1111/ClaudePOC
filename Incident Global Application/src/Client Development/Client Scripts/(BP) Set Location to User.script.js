function onChange(control, oldValue, newValue, isLoading) {
   if ((isLoading && !g_form.isNewRecord()) || (g_form.isLiveUpdating && g_form.isLiveUpdating()))
      return;

   if (newValue == '' || newValue == null) {
      g_form.clearValue('location');
      return;
   }
   if (!g_form.hasField('location'))
      return;
   var caller = g_form.getReference('caller_id', setLocation);
}

function setLocation(caller) {
   if (caller && caller.location)
       g_form.setValue('location', caller.location);
}
function onCondition() {
    if (g_form.isNewRecord()) {
        g_form.setMandatory('caller_id', false);
    }
}
var prob = new IncidentUtils().getProblemFromIncident(current);
if (prob != undefined) {
    current.problem_id = prob.insert();
    if (current.state != IncidentState.RESOLVED) {
        current.state = IncidentState.ON_HOLD;
        if (current.isValidField("hold_reason"))
            current.hold_reason = IncidentState.AWAITING_PROBLEM;
    }
    if (GlidePluginManager.isActive("com.snc.best_practice.problem.madrid")) {
        var problemV2Util = new ProblemV2Util();
        problemV2Util.copyAttachments(current, prob);
        problemV2Util.copyAttachedKnowledge(current, prob);
    }
    current.update();
    gs.addInfoMessage(gs.getMessage("Problem {0} created", prob.number));
    action.setRedirectURL(prob);
    action.setReturnURL(current);
} else {
    action.setRedirectURL(current);
}
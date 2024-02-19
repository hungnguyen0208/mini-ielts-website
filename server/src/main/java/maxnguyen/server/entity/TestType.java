package maxnguyen.server.entity;

public enum TestType {
    MATCHING("Matching"),
    MULTIPLE_CHOICE("Multiple choice"),
    PLAN_MAP_DIAGRAM_LABELLING("Plan, map, diagram labelling"),
    SENTENCE_COMPLETION("Sentence completion"),
    SUMMARY_FORM_COMPLETION("Summary, form completion");

    private final String text;

    TestType(String text){
        this.text = text;
    }

    public String getText() {
        return text;
    }
}

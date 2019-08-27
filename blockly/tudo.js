Blockly.Blocks['servo'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField(new Blockly.FieldTextInput("Servo"), "servo");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['servo'] = function(block) {
    var text_servo = block.getFieldValue('servo');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '#include &lt;Servo.h>\n\n';
    return code;
};

Blockly.Blocks['middle'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("middle")
            .appendField(new Blockly.FieldTextInput("port"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['middle'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'middle.attach('+text_name+');';
    return code;
};

Blockly.Blocks['right'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("right")
            .appendField(new Blockly.FieldTextInput("port"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['right'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '<br>right.attach('+text_name+');';
    return code;
};

Blockly.Blocks['left'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("left")
            .appendField(new Blockly.FieldTextInput("port"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['left'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '<br>left.attach('+text_name+');';
    return code;
};

Blockly.Blocks['right_mov'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("right")
            .appendField(new Blockly.FieldTextInput("graus"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['right_mov'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'right.write('+text_name+');<br>\n';
    return code;
};

Blockly.Blocks['left_mov'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("left")
            .appendField(new Blockly.FieldTextInput("graus"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

    Blockly.JavaScript['left_mov'] = function(block) {
        var text_name = block.getFieldValue('NAME');
        // TODO: Assemble JavaScript into code variable.
        var code = 'left.write('+text_name+');<br>\n';
        return code;
    };

Blockly.Blocks['middle_mov'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("middle")
            .appendField(new Blockly.FieldTextInput("graus"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['middle_mov'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'middle.write('+text_name+');<br>\n';
    return code;
};

Blockly.Blocks['claw_mov'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("claw")
            .appendField(new Blockly.FieldTextInput("graus"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.JavaScript['claw_mov'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'claw.write('+text_name+');<br>\n';;
    return code;
};


    Blockly.Blocks['claw'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("claw")
                .appendField(new Blockly.FieldTextInput("port"), "NAME");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(120);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    };

Blockly.JavaScript['claw'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '<br>claw.attach('+text_name+');';
    return code;
};

Blockly.Blocks['servo_tipo'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("Servo");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['servo_tipo'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '<br>Servo \n'+statements_name+';';
    return code;
};

Blockly.Blocks['var_claw'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("claw");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['var_claw'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'claw,\n';
    return code;
};

Blockly.Blocks['var_middle'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("middle");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['var_middle'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'middle\n';
    return code;
};

Blockly.Blocks['var_left'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("left");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['var_left'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = ' left, \n';
    return code;
};

Blockly.Blocks['var_right'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("right");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['var_right'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = ' right, \n';
    return code;
};

Blockly.Blocks['metodo_loop'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("loop");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(310);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['metodo_loop'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '<br>void loop(){<br>\n'+statements_name+'<br>}';
    return code;
};

Blockly.Blocks['metodo_setup'] = {
    init: function() {
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("setup");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['metodo_setup'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '<br>void setup(){<br>\n'+statements_name+'<br>}';
    return code;
};

Blockly.Blocks['serial_begin'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField(new Blockly.FieldTextInput("serial"), "NAME");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['serial_begin'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['var'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['var'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['delay'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("delay")
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['serial'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("serial")
            .appendField(new Blockly.FieldTextInput("9600"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['serial'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'Serial.begin('+text_name+');\n<br>';
    return code;
};

Blockly.JavaScript['delay'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'delay('+text_name+');<br>\n';
    return code;
};
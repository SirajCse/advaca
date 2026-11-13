/* Auto-generated from the LIVE old-app deployment (advacaold.bdi.bd,
 * scripts/oldsite_audit/old_form_specs.json — authenticated DOM capture of
 * every create/edit form). Field names are snake_case (direct backend
 * contract, verified against the untouched v5.5.3 FormRequests). `when`
 * conditions reference snake_case form fields. Structures follow the live
 * DOM exactly: fieldsets, order, repeat groups, conditions.
 */
export const formLayouts = {
 "Academic.Batch": {
  "preRequisite": [
   "courses"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "academic.batch.props.name",
    "model": "o.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "course",
    "label": "academic.course.course",
    "model": "o.course",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "courses"
   },
   {
    "type": "input",
    "name": "max_strength",
    "label": "academic.batch.props.max_strength",
    "model": "o.maxStrength",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "roll_number_prefix",
    "label": "academic.batch.props.roll_number_prefix",
    "model": "o.rollNumberPrefix",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "pg_account",
    "label": "finance.config.props.pg_account",
    "model": "o.pgAccount",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "academic.batch.props.description",
    "model": "o.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.BatchIncharge": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "batch",
    "label": "academic.batch.batch",
    "model": "t.batch",
    "valueProp": "uuid",
    "searchAction": "academic/batch/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/academic/batches"
   },
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "t.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.incharge.props.start_date",
    "model": "t.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.incharge.props.end_date",
    "model": "t.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "employee.incharge.props.remarks",
    "model": "t.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.BookList": {
  "preRequisite": [
   "types",
   "courses",
   "subjects"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "type",
    "label": "academic.book_list.props.type",
    "model": "t.type",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "select",
    "name": "course",
    "label": "academic.course.course",
    "model": "t.course",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "courses"
   },
   {
    "type": "select",
    "name": "subject",
    "label": "academic.subject.subject",
    "model": "t.subject",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "subjects"
   },
   {
    "type": "input",
    "name": "title",
    "label": "academic.book_list.props.title",
    "model": "t.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "author",
    "label": "academic.book_list.props.author",
    "model": "t.author",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "publisher",
    "label": "academic.book_list.props.publisher",
    "model": "t.publisher",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "quantity",
    "label": "academic.book_list.props.quantity",
    "model": "t.quantity",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==notebook"
   },
   {
    "type": "input",
    "name": "pages",
    "label": "academic.book_list.props.pages",
    "model": "t.pages",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==notebook"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "academic.book_list.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==notebook"
   }
  ]
 },
 "Academic.Certificate": {
  "preRequisite": [
   "templates"
  ],
  "fieldsets": [
   {
    "legend": "custom_field.custom_field",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": null,
      "model": "e.value",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==currency_input"
     },
     {
      "type": "input",
      "name": null,
      "model": "e.value",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==number_input"
     },
     {
      "type": "date",
      "name": null,
      "model": "e.value",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": true,
      "when": "type==date_time_picker"
     },
     {
      "type": "textarea",
      "name": null,
      "model": "e.value",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==markdown"
     },
     {
      "type": "select",
      "name": null,
      "model": "e.value",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==multi_select_input"
     },
     {
      "type": "radio-group",
      "name": null,
      "model": "e.value",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==radio_input"
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "select",
    "name": "template",
    "label": "academic.certificate.template.template",
    "model": "l.template",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "templates"
   },
   {
    "type": "date",
    "name": "date",
    "label": "academic.certificate.props.date",
    "model": "l.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "select-search",
    "name": "student",
    "label": "student.student",
    "model": "l.student",
    "valueProp": "uuid",
    "searchAction": "student/summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "for==student",
    "endpoint": "/app/students/summary",
    "displayFormat": "{name} - {codeNumber} ({contactNumber})"
   },
   {
    "type": "select-search",
    "name": "employee",
    "label": "employee.employee",
    "model": "l.employee",
    "valueProp": "uuid",
    "searchAction": "employee/summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "for==employee",
    "endpoint": "/app/employees/summary"
   },
   {
    "type": "input",
    "name": "custom_code_number",
    "label": "academic.certificate.props.custom_code_number",
    "model": "l.customCodeNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "name",
    "label": "contact.props.name",
    "model": "l.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_duplicate",
    "label": "general.duplicate",
    "model": "l.isDuplicate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.CertificateTemplate": {
  "preRequisite": [
   "types",
   "for",
   "customFieldTypes"
  ],
  "fieldsets": [
   {
    "legend": "academic.certificate.template.props.custom_field",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select",
      "name": null,
      "label": "global.select",
      "labelAttr": "custom_field.props.type",
      "model": "e.type",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": null,
      "label": "custom_field.props.name",
      "model": "e.name",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": null,
      "label": "custom_field.props.label",
      "model": "e.label",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": null,
      "label": "custom_field.props.min_length",
      "model": "e.minLength",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==multi_line_text_input"
     },
     {
      "type": "input",
      "name": null,
      "label": "custom_field.props.max_length",
      "model": "e.maxLength",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": null,
      "label": "custom_field.props.min_value",
      "model": "e.minValue",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==currency_input"
     },
     {
      "type": "input",
      "name": null,
      "label": "custom_field.props.max_value",
      "model": "e.maxValue",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": null,
      "label": "custom_field.props.options",
      "model": "e.options",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==radio_input"
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "academic.certificate.template.props.name",
    "model": "n.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "type",
    "label": "academic.certificate.template.props.type",
    "model": "n.type",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "select",
    "name": "for",
    "label": "academic.certificate.template.props.for",
    "model": "n.for",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "for"
   },
   {
    "type": "input",
    "name": "number_prefix",
    "label": "academic.certificate.template.props.number_prefix",
    "model": "n.numberPrefix",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number_digit",
    "label": "academic.certificate.template.props.number_digit",
    "model": "n.numberDigit",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number_suffix",
    "label": "academic.certificate.template.props.number_suffix",
    "model": "n.numberSuffix",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_custom_template_file",
    "label": "academic.certificate.template.props.has_custom_template_file",
    "model": "n.hasCustomTemplateFile",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "custom_template_file_name",
    "label": "academic.certificate.template.props.custom_template_file_name",
    "model": "n.customTemplateFileName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_custom_header",
    "label": "academic.certificate.template.props.has_custom_header",
    "model": "n.hasCustomHeader",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "editor",
    "name": "content",
    "label": null,
    "labelAttr": null,
    "when": null,
    "inputType": null,
    "required": false,
    "rowKey": null
   }
  ]
 },
 "Academic.ClassTiming": {
  "preRequisite": [],
  "fieldsets": [
   {
    "legend": null,
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "name",
      "rowKey": "sessions",
      "label": "academic.class_timing.props.session",
      "model": "s.name",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "code",
      "rowKey": "sessions",
      "label": "academic.class_timing.props.session_code",
      "model": "s.code",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "is_break",
      "rowKey": "sessions",
      "label": "academic.class_timing.props.is_break",
      "model": "s.isBreak",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "date",
      "name": "start_time",
      "rowKey": "sessions",
      "label": "academic.class_timing.props.start_time",
      "model": "s.startTime",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "date",
      "name": "end_time",
      "rowKey": "sessions",
      "label": "academic.class_timing.props.end_time",
      "model": "s.endTime",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "academic.class_timing.props.name",
    "model": "c.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "academic.class_timing.props.description",
    "model": "c.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.Course": {
  "preRequisite": [
   "divisions"
  ],
  "fieldsets": [
   {
    "legend": "academic.course.registration",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "checkbox",
      "name": "enable_registration",
      "label": "academic.course.props.enable_registration",
      "model": "t.enableRegistration",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "registration_fee",
      "label": "academic.course.props.registration_fee",
      "model": "t.registrationFee",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "academic.course.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "term",
    "label": "academic.course.props.term",
    "model": "t.term",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "division",
    "label": "academic.division.division",
    "model": "t.division",
    "labelProp": "nameWithProgram",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "divisions"
   },
   {
    "type": "input",
    "name": "code",
    "label": "academic.course.props.code",
    "model": "t.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "shortcode",
    "label": "academic.course.props.shortcode",
    "model": "t.shortcode",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "pg_account",
    "label": "finance.config.props.pg_account",
    "model": "t.pgAccount",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "batch_with_same_subject",
    "label": "academic.course.props.batch_with_same_subject",
    "model": "t.batchWithSameSubject",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "academic.course.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.CourseIncharge": {
  "preRequisite": [
   "courses"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "course",
    "label": "academic.course.course",
    "model": "r.course",
    "labelProp": "nameWithTermAndDivision",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "courses"
   },
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "r.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.incharge.props.start_date",
    "model": "r.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.incharge.props.end_date",
    "model": "r.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "employee.incharge.props.remarks",
    "model": "r.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.Department": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "academic.department.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "academic.department.props.code",
    "model": "t.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "shortcode",
    "label": "academic.department.props.shortcode",
    "model": "t.shortcode",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "academic.department.props.alias",
    "model": "t.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "academic.department.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.DepartmentIncharge": {
  "preRequisite": [
   "departments"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "department",
    "label": "academic.department.department",
    "model": "r.department",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "departments"
   },
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "r.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.incharge.props.start_date",
    "model": "r.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.incharge.props.end_date",
    "model": "r.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "employee.incharge.props.remarks",
    "model": "r.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.Division": {
  "preRequisite": [
   "programs"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "academic.division.props.name",
    "model": "a.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "academic.division.props.code",
    "model": "a.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "shortcode",
    "label": "academic.division.props.shortcode",
    "model": "a.shortcode",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "program",
    "label": "academic.program.program",
    "model": "a.program",
    "labelProp": "nameWithDepartment",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "programs"
   },
   {
    "type": "input",
    "name": "pg_account",
    "label": "finance.config.props.pg_account",
    "model": "a.pgAccount",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "academic.division.props.description",
    "model": "a.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.DivisionIncharge": {
  "preRequisite": [
   "divisions"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "division",
    "label": "academic.division.division",
    "model": "s.division",
    "labelProp": "nameWithProgram",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "divisions"
   },
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "s.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.incharge.props.start_date",
    "model": "s.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.incharge.props.end_date",
    "model": "s.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "employee.incharge.props.remarks",
    "model": "s.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.EnrollmentSeat": {
  "preRequisite": [
   "courses",
   "enrollmentTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "course",
    "label": "academic.course.course",
    "model": "t.course",
    "labelProp": "nameWithTermAndDivision",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "courses"
   },
   {
    "type": "select",
    "name": "enrollment_type",
    "label": "student.enrollment_type.enrollment_type",
    "model": "t.enrollmentType",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "enrollmentTypes"
   },
   {
    "type": "input",
    "name": "max_seat",
    "label": "academic.enrollment_seat.props.max_seat",
    "model": "t.maxSeat",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "academic.enrollment_seat.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.IdCardTemplate": {
  "preRequisite": [
   "for"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "academic.id_card.template.props.name",
    "model": "o.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "for",
    "label": "academic.id_card.template.props.for",
    "model": "o.for",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "for"
   },
   {
    "type": "input",
    "name": "custom_template_file_name",
    "label": "academic.id_card.template.props.custom_template_file_name",
    "model": "o.customTemplateFileName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.Period": {
  "preRequisite": [
   "sessions",
   "seeder"
  ],
  "fieldsets": [
   {
    "legend": "academic.period.props.timesheet_timing",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "date",
      "name": "session_start_time",
      "label": "academic.period.props.session_start_time",
      "model": "t.sessionStartTime",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "date",
      "name": "session_end_time",
      "label": "academic.period.props.session_end_time",
      "model": "t.sessionEndTime",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "select",
    "name": "session",
    "label": "academic.session.session",
    "model": "t.session",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "sessions"
   },
   {
    "type": "input",
    "name": "name",
    "label": "academic.period.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "academic.period.props.code",
    "model": "t.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "shortcode",
    "label": "academic.period.props.shortcode",
    "model": "t.shortcode",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "academic.period.props.alias",
    "model": "t.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "academic.period.props.start_date",
    "model": "t.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "academic.period.props.end_date",
    "model": "t.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "switch",
    "name": "enable_registration",
    "label": "global.enable",
    "labelAttr": "student.registration.registration",
    "model": "t.enableRegistration",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "seeders",
    "label": "academic.period.props.seeder",
    "model": "t.seeders",
    "labelProp": "label",
    "valueProp": "value",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "mode==edit",
    "optionsKey": "seeder"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "academic.period.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.Program": {
  "preRequisite": [
   "departments",
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "type",
    "label": "academic.program.props.type",
    "model": "t.type",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "select",
    "name": "department",
    "label": "academic.department.department",
    "model": "t.department",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "mode==create",
    "optionsKey": "departments"
   },
   {
    "type": "input",
    "name": "name",
    "label": "academic.program.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "academic.program.props.code",
    "model": "t.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "shortcode",
    "label": "academic.program.props.shortcode",
    "model": "t.shortcode",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "academic.program.props.alias",
    "model": "t.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "enable_registration",
    "label": "global.enable",
    "labelAttr": "student.registration.registration",
    "model": "t.enableRegistration",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "duration",
    "label": "academic.program.props.duration",
    "model": "t.duration",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "eligibility",
    "label": "academic.program.props.eligibility",
    "model": "t.eligibility",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "benefits",
    "label": "academic.program.props.benefits",
    "model": "t.benefits",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "academic.program.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.ProgramIncharge": {
  "preRequisite": [
   "programs"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "program",
    "label": "academic.program.program",
    "model": "o.program",
    "labelProp": "nameWithDepartment",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "programs"
   },
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "o.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.incharge.props.start_date",
    "model": "o.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.incharge.props.end_date",
    "model": "o.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "employee.incharge.props.remarks",
    "model": "o.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.ProgramType": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": []
 },
 "Academic.Session": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "academic.session.props.name",
    "model": "a.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "academic.session.props.code",
    "model": "a.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "shortcode",
    "label": "academic.session.props.shortcode",
    "model": "a.shortcode",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "academic.session.props.alias",
    "model": "a.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "academic.session.props.start_date",
    "model": "a.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "academic.session.props.end_date",
    "model": "a.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "academic.session.props.description",
    "model": "a.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.Subject": {
  "preRequisite": [
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "academic.subject.props.name",
    "model": "o.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "academic.subject.props.alias",
    "model": "o.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "academic.subject.props.code",
    "model": "o.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "shortcode",
    "label": "academic.subject.props.shortcode",
    "model": "o.shortcode",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "type",
    "label": "academic.subject.props.type",
    "model": "o.type",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "academic.subject.props.description",
    "model": "o.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.SubjectIncharge": {
  "preRequisite": [
   "subjects"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "subject",
    "label": "academic.subject.subject",
    "model": "r.subject",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "subjects"
   },
   {
    "type": "select-search",
    "name": "batch",
    "label": "academic.batch.batch",
    "model": "j.selectedBatch",
    "valueProp": "uuid",
    "searchAction": "academic/batch/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/academic/batches"
   },
   {
    "type": "select-search",
    "name": "batches",
    "label": "academic.batch.batch",
    "model": "r.batches",
    "valueProp": "uuid",
    "searchAction": "academic/batch/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "mode==create",
    "endpoint": "/app/academic/batches"
   },
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "r.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.incharge.props.start_date",
    "model": "r.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.incharge.props.end_date",
    "model": "r.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "employee.incharge.props.remarks",
    "model": "r.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Academic.Timetable": {
  "preRequisite": [
   "days",
   "classTimings"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "batch",
    "label": "academic.batch.batch",
    "model": "s.batch",
    "valueProp": "uuid",
    "searchAction": "academic/batch/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/academic/batches"
   },
   {
    "type": "date",
    "name": "effective_date",
    "label": "academic.timetable.props.effective_date",
    "model": "s.effectiveDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "select",
    "name": "room",
    "label": "asset.building.room.room",
    "model": "s.room",
    "labelProp": "fullName",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "rooms"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "academic.timetable.props.description",
    "model": "s.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_holiday",
    "rowKey": "records",
    "label": "employee.attendance.work_shift.props.is_holiday",
    "model": "e.isHoliday",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "class_timing",
    "rowKey": "records",
    "label": "academic.class_timing.class_timing",
    "model": "e.classTiming",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "classTimings"
   }
  ]
 },
 "Activity.Trip": {
  "preRequisite": [
   "types",
   "studentAudienceTypes",
   "employeeAudienceTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "type",
    "label": "activity.trip.props.type",
    "model": "s.type",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "input",
    "name": "title",
    "label": "activity.trip.props.title",
    "model": "s.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "venue",
    "label": "activity.trip.props.venue",
    "model": "s.venue",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "activity.trip.props.start_date",
    "model": "s.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "start_time",
    "label": "activity.trip.props.start_time",
    "model": "s.startTime",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "activity.trip.props.end_date",
    "model": "s.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_time",
    "label": "activity.trip.props.end_time",
    "model": "s.endTime",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "fee",
    "label": "activity.trip.props.fee",
    "model": "s.fee",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "summary",
    "label": "activity.trip.props.summary",
    "model": "s.summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Approval.Request": {
  "preRequisite": [
   "types",
   "priorities",
   "natures",
   "groups",
   "vendors"
  ],
  "fieldsets": [
   {
    "legend": "inventory.vendor.vendor",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select",
      "name": "vendor",
      "rowKey": "vendors",
      "label": "inventory.vendor.vendor",
      "labelAttr": "inventory.vendor.vendor",
      "model": "t.vendor",
      "labelProp": "name",
      "valueProp": "uuid",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "vendors"
     },
     {
      "type": "input",
      "name": "payment_name",
      "rowKey": "vendors",
      "label": "approval.request.props.payment_name",
      "model": "t.paymentName",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   },
   {
    "legend": "approval.request.item",
    "when": null,
    "repeat": null,
    "fields": []
   },
   {
    "legend": "approval.type_approval",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select",
      "name": "vendor",
      "label": "global.select",
      "labelAttr": "inventory.vendor.vendor",
      "model": "o.vendor",
      "labelProp": "name",
      "valueProp": "uuid",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "vendors"
     },
     {
      "type": "input",
      "name": "payment_payee",
      "label": "finance.transaction.props.payee",
      "model": "o.payment.payee",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "payment_amount",
      "label": "finance.transaction.props.amount",
      "model": "o.payment.amount",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "invoice_number",
      "label": "finance.transaction.props.invoice_number",
      "model": "o.payment.invoiceNumber",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "date",
      "name": "invoice_date",
      "label": "finance.transaction.props.invoice_date",
      "model": "o.payment.invoiceDate",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "payment_mode",
      "label": "finance.transaction.props.mode",
      "model": "o.payment.mode",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "textarea",
      "name": "payment_details",
      "label": "finance.transaction.props.details",
      "model": "o.payment.details",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   },
   {
    "legend": "approval.type_approval",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "contact_name",
      "label": "contact.props.name",
      "model": "o.contact.name",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "contact_contact_number",
      "label": "contact.props.contact_number",
      "model": "o.contact.contactNumber",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "contact_email",
      "label": "contact.props.email",
      "model": "o.contact.email",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "contact_website",
      "label": "contact.props.website",
      "model": "o.contact.website",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "contact_tax_number",
      "label": "contact.props.tax_number",
      "model": "o.contact.taxNumber",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "address-input",
      "name": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   },
   {
    "legend": "approval.type_approval",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "textarea",
      "name": "purpose",
      "label": "approval.request.props.purpose",
      "model": "o.purpose",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "title",
    "label": "approval.request.props.title",
    "model": "o.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "type",
    "label": "approval.type.type",
    "model": "o.type",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "select",
    "name": "priority",
    "label": "approval.request.priority.priority",
    "model": "o.priority",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "priorities"
   },
   {
    "type": "select",
    "name": "nature",
    "label": "approval.request.nature.nature",
    "model": "o.nature",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "natures"
   },
   {
    "type": "select",
    "name": "group",
    "label": "approval.request.group.group",
    "model": "o.group",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "groups"
   },
   {
    "type": "date",
    "name": "due_date",
    "label": "approval.request.props.due_date",
    "model": "o.dueDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "approval.request.props.description",
    "model": "o.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Approval.Type": {
  "preRequisite": [
   "categories",
   "events",
   "actions",
   "departments",
   "itemBasedTypes"
  ],
  "fieldsets": [
   {
    "legend": "approval.type.props.level",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select-search",
      "name": "employee",
      "rowKey": "levels",
      "label": "global.select",
      "labelAttr": "employee.employee",
      "model": "e.employee",
      "valueProp": "uuid",
      "searchAction": "employee/summary",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "endpoint": "/app/employees/summary"
     }
    ]
   },
   {
    "legend": "approval.config.config",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "switch",
      "name": "is_active",
      "label": "global.is",
      "labelAttr": "approval.type.statuses.active",
      "model": "l.isActive",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "enable_file_upload",
      "label": "global.enable",
      "labelAttr": "approval.type.props.file_upload",
      "model": "l.enableFileUpload",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "is_file_upload_required",
      "label": "global.required",
      "labelAttr": "approval.type.props.file_upload",
      "model": "l.isFileUploadRequired",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "enable_contact_number",
      "label": "global.enable",
      "labelAttr": "contact.props.contact_number",
      "model": "l.enableContactNumber",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "category==contact_based"
     },
     {
      "type": "switch",
      "name": "is_contact_number_required",
      "label": "global.required",
      "labelAttr": "contact.props.contact_number",
      "model": "l.isContactNumberRequired",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "enable_email",
      "label": "global.enable",
      "labelAttr": "contact.props.email",
      "model": "l.enableEmail",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "is_email_required",
      "label": "global.required",
      "labelAttr": "contact.props.email",
      "model": "l.isEmailRequired",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "enable_website",
      "label": "global.enable",
      "labelAttr": "contact.props.website",
      "model": "l.enableWebsite",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "is_website_required",
      "label": "global.required",
      "labelAttr": "contact.props.website",
      "model": "l.isWebsiteRequired",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "enable_tax_number",
      "label": "global.enable",
      "labelAttr": "contact.props.tax_number",
      "model": "l.enableTaxNumber",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "is_tax_number_required",
      "label": "global.required",
      "labelAttr": "contact.props.tax_number",
      "model": "l.isTaxNumberRequired",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "enable_address",
      "label": "global.enable",
      "labelAttr": "contact.props.address.address",
      "model": "l.enableAddress",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "is_address_required",
      "label": "global.required",
      "labelAttr": "contact.props.address.address",
      "model": "l.isAddressRequired",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "enable_invoice_number",
      "label": "global.enable",
      "labelAttr": "finance.transaction.props.invoice_number",
      "model": "l.enableInvoiceNumber",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "category==payment_based"
     },
     {
      "type": "switch",
      "name": "is_invoice_number_required",
      "label": "global.required",
      "labelAttr": "finance.transaction.props.invoice_number",
      "model": "l.isInvoiceNumberRequired",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "enable_invoice_date",
      "label": "global.enable",
      "labelAttr": "finance.transaction.props.invoice_date",
      "model": "l.enableInvoiceDate",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "is_invoice_date_required",
      "label": "global.required",
      "labelAttr": "finance.transaction.props.invoice_date",
      "model": "l.isInvoiceDateRequired",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "enable_payment_mode",
      "label": "global.enable",
      "labelAttr": "finance.transaction.props.mode",
      "model": "l.enablePaymentMode",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "is_mode_required",
      "label": "global.required",
      "labelAttr": "finance.transaction.props.mode",
      "model": "l.isPaymentModeRequired",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "enable_payment_details",
      "label": "global.enable",
      "labelAttr": "finance.transaction.props.details",
      "model": "l.enablePaymentDetails",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "is_payment_details_required",
      "label": "global.required",
      "labelAttr": "finance.transaction.props.details",
      "model": "l.isPaymentDetailsRequired",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "approval.type.props.name",
    "model": "l.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "category",
    "label": "approval.type.props.category",
    "model": "l.category",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "categories"
   },
   {
    "type": "select",
    "name": "department",
    "label": "employee.department.department",
    "model": "l.department",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "departments"
   },
   {
    "type": "select",
    "name": "event",
    "label": "approval.type.props.event",
    "model": "l.event",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "category==event_based",
    "optionsKey": "events"
   },
   {
    "type": "select",
    "name": "priority",
    "label": "approval.request.props.priority",
    "model": "l.priority",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "category==event_based",
    "optionsKey": "priorities"
   },
   {
    "type": "input",
    "name": "due_in",
    "label": "approval.type.props.due_in",
    "model": "l.dueIn",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "category==event_based"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "approval.type.props.description",
    "model": "l.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Asset.BuildingBlock": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "asset.building.block.props.name",
    "model": "a.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "asset.building.block.props.alias",
    "model": "a.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "asset.building.block.props.description",
    "model": "a.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Asset.BuildingFloor": {
  "preRequisite": [
   "blocks"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "asset.building.floor.props.name",
    "model": "s.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "asset.building.floor.props.alias",
    "model": "s.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "block",
    "label": "asset.building.block.block",
    "model": "s.block",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "blocks"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "asset.building.floor.props.description",
    "model": "s.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Asset.BuildingRoom": {
  "preRequisite": [
   "floors"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "asset.building.room.props.name",
    "model": "s.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number",
    "label": "asset.building.room.props.number",
    "model": "s.number",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "floor",
    "label": "asset.building.floor.floor",
    "model": "s.floor",
    "labelProp": "nameWithBlock",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "floors"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "asset.building.room.props.description",
    "model": "s.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Blog.Blog": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "title",
    "model": "n.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "sub_title",
    "model": "n.subTitle",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "editor",
    "name": "content",
    "label": null,
    "labelAttr": null,
    "when": null,
    "inputType": null,
    "required": true,
    "rowKey": null
   }
  ]
 },
 "Calendar.Event": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "type",
    "label": "calendar.event.props.type",
    "model": "s.type",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "input",
    "name": "title",
    "label": "calendar.event.props.title",
    "model": "s.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "venue",
    "label": "calendar.event.props.venue",
    "model": "s.venue",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "calendar.event.props.start_date",
    "model": "s.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "start_time",
    "label": "calendar.event.props.start_time",
    "model": "s.startTime",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "calendar.event.props.end_date",
    "model": "s.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_time",
    "label": "calendar.event.props.end_time",
    "model": "s.endTime",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select-search",
    "name": "incharge",
    "label": "global.select",
    "labelAttr": "employee.incharge.incharge",
    "model": "s.incharge",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "switch",
    "name": "is_public",
    "label": "calendar.event.props.is_public",
    "model": "s.isPublic",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "for_alumni",
    "label": "calendar.event.props.for_alumni",
    "model": "s.forAlumni",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "sessions",
    "label": "academic.session.session",
    "model": "s.sessions",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "sessions"
   },
   {
    "type": "select",
    "name": "periods",
    "label": "academic.period.period",
    "model": "s.periods",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "periods"
   },
   {
    "type": "textarea",
    "name": "excerpt",
    "label": "calendar.event.props.excerpt",
    "model": "s.excerpt",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Calendar.Holiday": {
  "preRequisite": [
   "days"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "calendar.holiday.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "radio-group",
    "name": "type",
    "label": "calendar.holiday.props.type_range",
    "model": "t.type",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "mode==create"
   },
   {
    "type": "select",
    "name": "days",
    "label": "calendar.holiday.props.days",
    "model": "t.days",
    "labelProp": "label",
    "valueProp": "value",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==weekend",
    "optionsKey": "days"
   },
   {
    "type": "date",
    "name": "date_between",
    "label": "general.date_between",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==range"
   },
   {
    "type": "date",
    "name": "dates",
    "label": "calendar.holiday.props.dates",
    "model": "t.dates",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": "type==dates"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "calendar.holiday.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==dates"
   }
  ]
 },
 "Communication.Announcement": {
  "preRequisite": [
   "types",
   "studentAudienceTypes",
   "employeeAudienceTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "title",
    "label": "communication.announcement.props.title",
    "model": "t.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "type",
    "label": "communication.announcement.props.type",
    "model": "t.type",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "switch",
    "name": "is_public",
    "label": "communication.announcement.props.is_public",
    "model": "t.isPublic",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "excerpt",
    "label": "communication.announcement.props.excerpt",
    "model": "t.excerpt",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Communication.Email": {
  "preRequisite": [
   "studentAudienceTypes",
   "employeeAudienceTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "subject",
    "label": "communication.email.props.subject",
    "model": "t.subject",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "inclusion",
    "label": "communication.email.props.inclusion",
    "model": "t.inclusion",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "exclusion",
    "label": "communication.email.props.exclusion",
    "model": "t.exclusion",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "editor",
    "name": "content",
    "label": null,
    "labelAttr": null,
    "when": null,
    "inputType": null,
    "required": false,
    "rowKey": null
   }
  ]
 },
 "Communication.PushMessage": {
  "preRequisite": [
   "studentAudienceTypes",
   "employeeAudienceTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "subject",
    "label": "communication.push_message.props.subject",
    "model": "s.subject",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "content",
    "label": "communication.push_message.props.content",
    "model": "s.content",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Communication.SMS": {
  "preRequisite": [
   "studentAudienceTypes",
   "employeeAudienceTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "subject",
    "label": "communication.sms.props.subject",
    "model": "t.subject",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "inclusion",
    "label": "communication.sms.props.inclusion",
    "model": "t.inclusion",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "exclusion",
    "label": "communication.sms.props.exclusion",
    "model": "t.exclusion",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "content",
    "label": "communication.sms.props.content",
    "model": "t.content",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Communication.WhatsApp": {
  "preRequisite": [
   "studentAudienceTypes",
   "employeeAudienceTypes",
   "preDefinedVariables"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "subject",
    "label": "communication.whatsapp.props.subject",
    "model": "n.subject",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "template_code",
    "label": "communication.whatsapp.props.template_code",
    "model": "n.templateCode",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "content",
    "label": "communication.whatsapp.props.content",
    "model": "n.content",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": null,
    "model": "e.value",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Config.Locale": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "config.locale.props.name",
    "model": "e.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "config.locale.props.code",
    "model": "e.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Config.MailTemplate": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "subject",
    "label": "config.mail.template.props.subject",
    "model": "t.subject",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "editor",
    "name": "content",
    "label": null,
    "labelAttr": null,
    "when": null,
    "inputType": null,
    "required": true,
    "rowKey": null
   }
  ]
 },
 "Config.PushNotificationTemplate": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "subject",
    "label": "config.push_notification.template.props.subject",
    "model": "t.subject",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "config.push_notification.template.props.content",
    "model": "t.content",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Config.SMSTemplate": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "subject",
    "label": "config.sms.template.props.subject",
    "model": "o.subject",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "template_id",
    "label": "config.sms.template.props.template_id",
    "model": "o.templateId",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "config.sms.template.props.content",
    "model": "o.content",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Config.WhatsAppTemplate": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "subject",
    "label": "config.whatsapp.template.props.subject",
    "model": "a.subject",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "template_id",
    "label": "config.whatsapp.template.props.template_id",
    "model": "a.templateId",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "config.whatsapp.template.props.content",
    "model": "a.content",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Contact.Contact": {
  "preRequisite": [
   "genders"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "radio-group",
    "name": "gender",
    "model": "a.gender",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "genders"
   },
   {
    "type": "date",
    "name": "birth_date",
    "label": "contact.props.birth_date",
    "model": "a.birthDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "contact_number",
    "label": "contact.props.contact_number",
    "model": "a.contactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "email",
    "label": "contact.props.email",
    "model": "a.email",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "father_name",
    "label": "contact.props.father_name",
    "model": "a.fatherName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "mother_name",
    "label": "contact.props.mother_name",
    "model": "a.motherName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Contact.ConfigDocumentType": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "contact.document_type.props.name",
    "model": "o.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_number",
    "label": "global.has_attribute",
    "labelAttr": "contact.document_type.props.number",
    "model": "o.hasNumber",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number_format",
    "label": "contact.document_type.props.number_format",
    "model": "o.numberFormat",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_expiry_date",
    "label": "global.has_attribute",
    "labelAttr": "contact.document_type.props.expiry_date",
    "model": "o.hasExpiryDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alert_days_before_expiry",
    "label": "contact.document_type.props.alert_days_before_expiry",
    "model": "o.alertDaysBeforeExpiry",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_document_required",
    "label": "global.required",
    "labelAttr": "contact.document.document",
    "model": "o.isDocumentRequired",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "contact.document_type.props.description",
    "model": "o.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "CustomField.CustomField": {
  "preRequisite": [
   "forms",
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "form",
    "label": "custom_field.props.form",
    "model": "t.form",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "forms"
   },
   {
    "type": "select",
    "name": "type",
    "label": "custom_field.props.type",
    "model": "t.type",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "switch",
    "name": "is_required",
    "label": "custom_field.props.is_required",
    "model": "t.isRequired",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "label",
    "label": "custom_field.props.label",
    "model": "t.label",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "min_length",
    "label": "custom_field.props.min_length",
    "model": "t.minLength",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==multi_line_text_input"
   },
   {
    "type": "input",
    "name": "max_length",
    "label": "custom_field.props.max_length",
    "model": "t.maxLength",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==multi_line_text_input"
   },
   {
    "type": "input",
    "name": "min_value",
    "label": "custom_field.props.min_value",
    "model": "t.minValue",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==currency_input"
   },
   {
    "type": "input",
    "name": "max_value",
    "label": "custom_field.props.max_value",
    "model": "t.maxValue",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==currency_input"
   },
   {
    "type": "input",
    "name": "options",
    "label": "custom_field.props.options",
    "model": "t.options",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==radio_input"
   },
   {
    "type": "input",
    "name": "position",
    "label": "custom_field.props.position",
    "model": "t.position",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==radio_input"
   }
  ]
 },
 "Device.Device": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "device.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "device.props.code",
    "model": "t.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "device.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Discipline.Incident": {
  "preRequisite": [
   "categories"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "category",
    "label": "discipline.incident.props.category",
    "model": "n.category",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "categories"
   },
   {
    "type": "input",
    "name": "title",
    "label": "discipline.incident.props.title",
    "model": "n.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "nature",
    "label": "discipline.incident.props.nature",
    "model": "n.nature",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "natures"
   },
   {
    "type": "select",
    "name": "severity",
    "label": "discipline.incident.props.severity",
    "model": "n.severity",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "severities"
   },
   {
    "type": "date",
    "name": "date",
    "label": "discipline.incident.props.date",
    "model": "n.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "select-search",
    "name": "student",
    "label": "student.student",
    "model": "n.student",
    "valueProp": "uuid",
    "searchAction": "student/summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/students/summary",
    "displayFormat": "{name} - {codeNumber} ({contactNumber})"
   },
   {
    "type": "input",
    "name": "reported_by",
    "label": "discipline.incident.props.reported_by",
    "model": "n.reportedBy",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Account": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "finance.account.props.name",
    "model": "o.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "finance.account.props.alias",
    "model": "o.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number",
    "label": "finance.account.props.number",
    "model": "o.number",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_name",
    "label": "finance.account.props.bank_name",
    "model": "o.bankName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "branch_name",
    "label": "finance.account.props.branch_name",
    "model": "o.branchName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_code1",
    "model": "o.bankCode1",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_code2",
    "model": "o.bankCode2",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_code3",
    "model": "o.bankCode3",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Accounts": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "finance.account.props.name",
    "model": "n.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "finance.account.props.alias",
    "model": "n.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number",
    "label": "finance.account.props.number",
    "model": "n.number",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_name",
    "label": "finance.account.props.bank_name",
    "model": "n.bankName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "branch_name",
    "label": "finance.account.props.branch_name",
    "model": "n.branchName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_code1",
    "model": "n.bankCode1",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_code2",
    "model": "n.bankCode2",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_code3",
    "model": "n.bankCode3",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Employee": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "radio-group",
    "name": "employee_type",
    "model": "t.employeeType",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "employeeTypes"
   },
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "t.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "addition_scope==transfer",
    "endpoint": "/app/employees/list"
   },
   {
    "type": "input",
    "name": "code_number",
    "label": "employee.props.code_number",
    "model": "t.codeNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "whenAny": [
     "employee_type==other_team_member"
    ]
   },
   {
    "type": "radio-group",
    "name": "gender",
    "model": "t.gender",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "genders"
   },
   {
    "type": "date",
    "name": "birth_date",
    "label": "contact.props.birth_date",
    "model": "t.birthDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "contact_number",
    "label": "contact.props.contact_number",
    "model": "t.contactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "email",
    "label": "contact.props.email",
    "model": "t.email",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "roles",
    "label": "contact.login.props.role",
    "model": "t.roles",
    "labelProp": "label",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "roles"
   },
   {
    "type": "date",
    "name": "joining_date",
    "label": "employee.props.joining_date",
    "model": "t.joiningDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "select",
    "name": "type",
    "label": "global.select",
    "labelAttr": "employee.type",
    "model": "t.type",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "select",
    "name": "employment_status",
    "label": "global.select",
    "labelAttr": "employee.employment_status.employment_status",
    "model": "t.employmentStatus",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "employmentStatuses"
   },
   {
    "type": "select",
    "name": "department",
    "label": "global.select",
    "labelAttr": "employee.department.department",
    "model": "t.department",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "departments"
   },
   {
    "type": "select",
    "name": "designation",
    "label": "global.select",
    "labelAttr": "employee.designation.designation",
    "model": "t.designation",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "designations"
   },
   {
    "type": "switch",
    "name": "create_user_account",
    "label": "global.create",
    "labelAttr": "contact.user_account",
    "model": "t.createUserAccount",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "employee_type==new"
   },
   {
    "type": "input",
    "name": "username",
    "label": "contact.login.props.username",
    "model": "t.username",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "password",
    "label": "contact.login.props.password",
    "model": "t.password",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "password_confirmation",
    "label": "contact.login.props.password_confirmation",
    "model": "t.passwordConfirmation",
    "inputType": "password",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.AttendanceTimesheet": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "a.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "date",
    "name": "date",
    "label": "employee.attendance.timesheet.props.date",
    "model": "a.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "in_at",
    "label": "employee.attendance.timesheet.props.in_at",
    "model": "a.inAt",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "out_at",
    "label": "employee.attendance.timesheet.props.out_at",
    "model": "a.outAt",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "employee.attendance.timesheet.props.remarks",
    "model": "a.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.AttendanceType": {
  "preRequisite": [
   "attendanceCategories"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "category",
    "label": "employee.attendance.type.props.category",
    "model": "t.category",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "attendanceCategories"
   },
   {
    "type": "input",
    "name": "name",
    "label": "employee.attendance.type.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "employee.attendance.type.props.alias",
    "model": "t.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "employee.attendance.type.props.code",
    "model": "t.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "employee.attendance.type.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.AttendanceWorkShift": {
  "preRequisite": [
   "days"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "employee.attendance.work_shift.props.name",
    "model": "n.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "employee.attendance.work_shift.props.code",
    "model": "n.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "employee.attendance.work_shift.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_holiday",
    "rowKey": "records",
    "label": "employee.attendance.work_shift.props.is_holiday",
    "model": "e.isHoliday",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_overnight",
    "rowKey": "records",
    "label": "employee.attendance.work_shift.props.is_overnight",
    "model": "e.isOvernight",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_time",
    "rowKey": "records",
    "label": "employee.attendance.work_shift.props.start_time",
    "model": "e.startTime",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_time",
    "rowKey": "records",
    "label": "employee.attendance.work_shift.props.end_time",
    "model": "e.endTime",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.ConfigDocumentType": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "employee.document_type.props.name",
    "model": "r.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_number",
    "label": "global.has_attribute",
    "labelAttr": "employee.document_type.props.number",
    "model": "r.hasNumber",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number_format",
    "label": "employee.document_type.props.number_format",
    "model": "r.numberFormat",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_expiry_date",
    "label": "global.has_attribute",
    "labelAttr": "employee.document_type.props.expiry_date",
    "model": "r.hasExpiryDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alert_days_before_expiry",
    "label": "employee.document_type.props.alert_days_before_expiry",
    "model": "r.alertDaysBeforeExpiry",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_document_required",
    "label": "global.required",
    "labelAttr": "employee.document.document",
    "model": "r.isDocumentRequired",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "employee.document_type.props.description",
    "model": "r.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Department": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "employee.department.props.name",
    "model": "a.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "employee.department.props.alias",
    "model": "a.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_global",
    "label": "global.is",
    "labelAttr": "employee.department.props.global",
    "model": "a.isGlobal",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "employee.department.props.description",
    "model": "a.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Designation": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "employee.designation.props.name",
    "model": "n.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "employee.designation.props.alias",
    "model": "n.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select-search",
    "name": "parent",
    "label": "global.select",
    "labelAttr": "employee.designation.props.parent",
    "model": "n.parent",
    "searchAction": "employee/designation/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employee/designations"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "employee.designation.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Dialogue": {
  "preRequisite": [
   "categories"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "category",
    "label": "employee.dialogue_category.dialogue_category",
    "model": "o.category",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "categories"
   },
   {
    "type": "date",
    "name": "date",
    "label": "employee.dialogue.props.date",
    "model": "o.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "title",
    "label": "employee.dialogue.props.title",
    "model": "o.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "employee.dialogue.props.description",
    "model": "o.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Document": {
  "preRequisite": [
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "type",
    "label": "employee.document_type.document_type",
    "model": "d.selectedType",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "input",
    "name": "title",
    "label": "employee.document.props.title",
    "model": "o.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number",
    "label": "employee.document.props.number",
    "model": "o.number",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "issue_date",
    "label": "employee.document.props.issue_date",
    "model": "o.issueDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.document.props.start_date",
    "model": "o.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.document.props.end_date",
    "model": "o.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_submitted_original",
    "label": "employee.document.props.is_submitted_original",
    "model": "o.isSubmittedOriginal",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "employee.document.props.description",
    "model": "o.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Documents": {
  "preRequisite": [
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "s.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "select",
    "name": "type",
    "label": "global.select",
    "labelAttr": "employee.document_type.document_type",
    "model": "m.selectedType",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "input",
    "name": "title",
    "label": "employee.document.props.title",
    "model": "s.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number",
    "label": "employee.document.props.number",
    "model": "s.number",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "issue_date",
    "label": "employee.document.props.issue_date",
    "model": "s.issueDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.document.props.start_date",
    "model": "s.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.document.props.end_date",
    "model": "s.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_submitted_original",
    "label": "employee.document.props.is_submitted_original",
    "model": "s.isSubmittedOriginal",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "employee.document.props.description",
    "model": "s.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Experience": {
  "preRequisite": [
   "employmentTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "employment_type",
    "label": "employee.employment_type.employment_type",
    "model": "t.employmentType",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "employmentTypes"
   },
   {
    "type": "input",
    "name": "headline",
    "label": "employee.experience.props.headline",
    "model": "t.headline",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "title",
    "label": "employee.experience.props.title",
    "model": "t.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "organization_name",
    "label": "employee.experience.props.organization_name",
    "model": "t.organizationName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "location",
    "label": "employee.experience.props.location",
    "model": "t.location",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.experience.props.start_date",
    "model": "t.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.experience.props.end_date",
    "model": "t.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "job_profile",
    "label": "employee.experience.props.job_profile",
    "model": "t.jobProfile",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_submitted_original",
    "label": "employee.experience.props.is_submitted_original",
    "model": "t.isSubmittedOriginal",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Experiences": {
  "preRequisite": [
   "employmentTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "t.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "select",
    "name": "employment_type",
    "label": "employee.employment_type.employment_type",
    "model": "t.employmentType",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "employmentTypes"
   },
   {
    "type": "input",
    "name": "headline",
    "label": "employee.experience.props.headline",
    "model": "t.headline",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "title",
    "label": "employee.experience.props.title",
    "model": "t.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "organization_name",
    "label": "employee.experience.props.organization_name",
    "model": "t.organizationName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "location",
    "label": "employee.experience.props.location",
    "model": "t.location",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.experience.props.start_date",
    "model": "t.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.experience.props.end_date",
    "model": "t.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "job_profile",
    "label": "employee.experience.props.job_profile",
    "model": "t.jobProfile",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_submitted_original",
    "label": "employee.experience.props.is_submitted_original",
    "model": "t.isSubmittedOriginal",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Leave.Allocation": {
  "preRequisite": [
   "leaveTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "o.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "date",
    "name": "date_between",
    "label": "general.date_between",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "employee.leave.allocation.props.description",
    "model": "o.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": null,
    "label": "employee.leave.allocation.props.allotted",
    "model": "e.allotted",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Leave.Request": {
  "preRequisite": [
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "leave_type",
    "label": "global.select",
    "labelAttr": "employee.leave.type.type",
    "model": "t.leaveType",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "mode==edit"
   },
   {
    "type": "date",
    "name": "date_between",
    "label": "general.date_between",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_half_day",
    "label": "employee.leave.request.props.half_day",
    "model": "t.isHalfDay",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "reason",
    "label": "employee.leave.request.props.reason",
    "model": "t.reason",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Leave.Type": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "employee.leave.type.props.name",
    "model": "a.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "employee.leave.type.props.code",
    "model": "a.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "employee.leave.type.props.alias",
    "model": "a.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "employee.leave.type.props.description",
    "model": "a.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Payroll": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "p.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": "all",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "date",
    "name": "date_between",
    "label": "employee.payroll.props.period",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "ignore_attendance",
    "label": "employee.payroll.props.ignore_attendance",
    "model": "p.ignoreAttendance",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "amount",
    "rowKey": "records",
    "model": "t.amount",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "employee.payroll.props.remarks",
    "model": "b.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.PayrollPayHead": {
  "preRequisite": [
   "payHeadCategories"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "category",
    "label": "employee.payroll.pay_head.props.category",
    "model": "o.category",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "payHeadCategories"
   },
   {
    "type": "input",
    "name": "name",
    "label": "employee.payroll.pay_head.props.name",
    "model": "o.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "employee.payroll.pay_head.props.code",
    "model": "o.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "employee.payroll.pay_head.props.alias",
    "model": "o.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "employee.payroll.pay_head.props.description",
    "model": "o.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.PayrollSalaryStructure": {
  "preRequisite": [
   "salaryTemplates"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "l.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": "all",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "select",
    "name": "salary_template",
    "label": "global.select",
    "labelAttr": "employee.payroll.salary_template.salary_template",
    "model": "l.salaryTemplate",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "salaryTemplates"
   },
   {
    "type": "date",
    "name": "effective_date",
    "label": "employee.payroll.salary_structure.props.effective_date",
    "model": "l.effectiveDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "hourly_pay",
    "label": "employee.payroll.salary_structure.props.hourly_pay",
    "model": "l.hourlyPay",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "amount",
    "rowKey": "records",
    "label": "employee.payroll.salary_structure.props.amount",
    "model": "e.amount",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "employee.payroll.salary_structure.props.description",
    "model": "l.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.PayrollSalaryTemplate": {
  "preRequisite": [
   "attendanceTypes",
   "payHeadTypes",
   "payHeads",
   "variables",
   "comparisonOperators",
   "logicalOperators"
  ],
  "fieldsets": [
   {
    "legend": null,
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select",
      "name": "type",
      "rowKey": "records",
      "label": "employee.payroll.salary_template.props.type",
      "model": "a.type",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "computation",
      "rowKey": "records",
      "label": "employee.payroll.salary_template.props.computation",
      "model": "a.computation",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==computation"
     },
     {
      "type": "select",
      "name": "attendance_type",
      "rowKey": "records",
      "label": "employee.attendance.type.type",
      "model": "a.attendanceType",
      "labelProp": "name",
      "valueProp": "uuid",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==production_based",
      "optionsKey": "attendanceTypes"
     },
     {
      "type": "input",
      "name": "min_value",
      "rowKey": "records",
      "label": "employee.payroll.salary_template.props.min_value",
      "model": "a.minValue",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "max_value",
      "rowKey": "records",
      "label": "employee.payroll.salary_template.props.max_value",
      "model": "a.maxValue",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "has_condition",
      "rowKey": "records",
      "model": "a.hasCondition",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==computation"
     },
     {
      "type": "button",
      "name": null,
      "label": "global.add",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   },
   {
    "legend": "employee.payroll.pay_head.pay_head",
    "when": null,
    "repeat": null,
    "fields": []
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "employee.payroll.salary_template.props.name",
    "model": "u.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "employee.payroll.salary_template.props.alias",
    "model": "u.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "employee.payroll.salary_template.props.description",
    "model": "u.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_hourly_payroll",
    "label": "employee.payroll.salary_template.props.hourly_payroll",
    "model": "u.hasHourlyPayroll",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.EditRequest": {
  "preRequisite": [
   "genders",
   "bloodGroups",
   "religions",
   "categories",
   "castes",
   "maritalStatuses",
   "relations"
  ],
  "fieldsets": [
   {
    "legend": "contact.props.present_address",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "address-input",
      "name": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   },
   {
    "legend": "contact.props.permanent_address",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "switch",
      "name": "same_as_present_address",
      "label": "contact.props.same_as_present_address",
      "model": "r.permanentAddress.sameAsPresentAddress",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "address-input",
      "name": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   },
   {
    "legend": "contact.props.emergency_contact",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "emergency_contact.name",
      "label": "contact.props.emergency_contact_name",
      "model": "r.emergencyContact.name",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "emergency_contact.contact_number",
      "label": "contact.props.emergency_contact_number",
      "model": "r.emergencyContact.contactNumber",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "select",
      "name": "emergency_contact.relation",
      "label": "contact.props.relation",
      "model": "r.emergencyContact.relation",
      "labelProp": "label",
      "valueProp": "value",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "radio-group",
    "name": "gender",
    "model": "r.gender",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "genders"
   },
   {
    "type": "date",
    "name": "birth_date",
    "label": "contact.props.birth_date",
    "model": "r.birthDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "contact_number",
    "label": "contact.props.primary_contact_number",
    "model": "r.contactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alternate_contact_number",
    "label": "contact.props.alternate_contact_number",
    "model": "r.alternateContactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "email",
    "label": "contact.props.email",
    "model": "r.email",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "father_name",
    "label": "contact.props.father_name",
    "model": "r.fatherName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "mother_name",
    "label": "contact.props.mother_name",
    "model": "r.motherName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "unique_id_number1",
    "model": "r.uniqueIdNumber1",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "unique_id_number2",
    "model": "r.uniqueIdNumber2",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "unique_id_number3",
    "model": "r.uniqueIdNumber3",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "unique_id_number4",
    "model": "r.uniqueIdNumber4",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "unique_id_number5",
    "model": "r.uniqueIdNumber5",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "birth_place",
    "label": "contact.props.birth_place",
    "model": "r.birthPlace",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "nationality",
    "label": "contact.props.nationality",
    "model": "r.nationality",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "mother_tongue",
    "label": "contact.props.mother_tongue",
    "model": "r.motherTongue",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "blood_group",
    "label": "contact.props.blood_group",
    "model": "r.bloodGroup",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "bloodGroups"
   },
   {
    "type": "select",
    "name": "marital_status",
    "label": "contact.props.marital_status",
    "model": "r.maritalStatus",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "religion",
    "label": "global.select",
    "labelAttr": "contact.religion.religion",
    "model": "r.religion",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "religions"
   },
   {
    "type": "select",
    "name": "category",
    "label": "global.select",
    "labelAttr": "contact.category.category",
    "model": "r.category",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "caste",
    "label": "global.select",
    "labelAttr": "contact.caste.caste",
    "model": "r.caste",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "castes"
   }
  ]
 },
 "Employee.Qualification": {
  "preRequisite": [
   "levels",
   "results"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "level",
    "label": "contact.qualification_level.qualification_level",
    "model": "a.level",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "levels"
   },
   {
    "type": "input",
    "name": "course",
    "label": "employee.qualification.props.course",
    "model": "a.course",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "session",
    "label": "employee.qualification.props.session",
    "model": "a.session",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "autosuggest",
    "name": "institute",
    "label": "employee.qualification.props.institute",
    "model": "a.institute",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "institute_address",
    "label": "employee.qualification.props.institute_address",
    "model": "a.instituteAddress",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "autosuggest",
    "name": "affiliated_to",
    "label": "employee.qualification.props.affiliated_to",
    "model": "a.affiliatedTo",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.qualification.props.start_date",
    "model": "a.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.qualification.props.end_date",
    "model": "a.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "result",
    "label": "employee.qualification.props.result",
    "model": "a.result",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "results"
   },
   {
    "type": "input",
    "name": "total_marks",
    "label": "employee.qualification.props.total_marks",
    "model": "a.totalMarks",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "result==pass"
   },
   {
    "type": "input",
    "name": "obtained_marks",
    "label": "employee.qualification.props.obtained_marks",
    "model": "a.obtainedMarks",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "result==pass"
   },
   {
    "type": "input",
    "name": "failed_subjects",
    "label": "employee.qualification.props.failed_subjects",
    "model": "a.failedSubjects",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "result==reappear"
   },
   {
    "type": "switch",
    "name": "is_submitted_original",
    "label": "employee.qualification.props.is_submitted_original",
    "model": "a.isSubmittedOriginal",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Qualifications": {
  "preRequisite": [
   "levels",
   "results"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "o.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "select",
    "name": "level",
    "label": "contact.qualification_level.qualification_level",
    "model": "o.level",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "levels"
   },
   {
    "type": "input",
    "name": "course",
    "label": "employee.qualification.props.course",
    "model": "o.course",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "session",
    "label": "employee.qualification.props.session",
    "model": "o.session",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "autosuggest",
    "name": "institute",
    "label": "employee.qualification.props.institute",
    "model": "o.institute",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "institute_address",
    "label": "employee.qualification.props.institute_address",
    "model": "o.instituteAddress",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "autosuggest",
    "name": "affiliated_to",
    "label": "employee.qualification.props.affiliated_to",
    "model": "o.affiliatedTo",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.qualification.props.start_date",
    "model": "o.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.qualification.props.end_date",
    "model": "o.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "result",
    "label": "employee.qualification.props.result",
    "model": "o.result",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "results"
   },
   {
    "type": "input",
    "name": "total_marks",
    "label": "employee.qualification.props.total_marks",
    "model": "o.totalMarks",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "result==pass"
   },
   {
    "type": "input",
    "name": "obtained_marks",
    "label": "employee.qualification.props.obtained_marks",
    "model": "o.obtainedMarks",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "result==pass"
   },
   {
    "type": "input",
    "name": "failed_subjects",
    "label": "employee.qualification.props.failed_subjects",
    "model": "o.failedSubjects",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "result==reappear"
   },
   {
    "type": "switch",
    "name": "is_submitted_original",
    "label": "employee.qualification.props.is_submitted_original",
    "model": "o.isSubmittedOriginal",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.Record": {
  "preRequisite": [
   "departments",
   "designations",
   "employmentStatuses"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "switch",
    "name": "end",
    "model": "o.end",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "model": "o.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "model": "o.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "department",
    "model": "o.department",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "departments"
   },
   {
    "type": "select",
    "name": "designation",
    "model": "o.designation",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "designations"
   },
   {
    "type": "select",
    "name": "employment_status",
    "model": "o.employmentStatus",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "employmentStatuses"
   },
   {
    "type": "textarea",
    "name": "remarks",
    "model": "o.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.WorkShift": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "work_shift",
    "label": "global.select",
    "labelAttr": "employee.attendance.work_shift.work_shift",
    "model": "o.workShift",
    "searchAction": "employee/attendance/workShift/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employee/attendance/work-shifts"
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.attendance.work_shift.props.start_date",
    "model": "o.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.attendance.work_shift.props.end_date",
    "model": "o.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "employee.attendance.work_shift.props.remarks",
    "model": "o.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Exam.Exam": {
  "preRequisite": [
   "terms"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "exam.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "exam.props.code",
    "model": "t.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "term",
    "label": "exam.term.term",
    "model": "t.term",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "terms"
   },
   {
    "type": "input",
    "name": "display_name",
    "label": "exam.props.display_name",
    "model": "t.displayName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "weightage",
    "label": "exam.props.weightage",
    "model": "t.weightage",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "exam.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Exam.Assessment": {
  "preRequisite": [],
  "fieldsets": [
   {
    "legend": null,
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "name",
      "rowKey": "records",
      "label": "exam.assessment.props.name",
      "model": "e.name",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "code",
      "rowKey": "records",
      "label": "exam.assessment.props.code",
      "model": "e.code",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "max_mark",
      "rowKey": "records",
      "label": "exam.assessment.props.max_mark",
      "model": "e.maxMark",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "passing_mark",
      "rowKey": "records",
      "label": "exam.assessment.props.passing_mark",
      "model": "e.passingMark",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "exam.assessment.props.name",
    "model": "d.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "exam.assessment.props.description",
    "model": "d.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Exam.Competency": {
  "preRequisite": [
   "grades"
  ],
  "fieldsets": [
   {
    "legend": null,
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "name",
      "rowKey": "domains",
      "label": "exam.competency.props.domain",
      "model": "t.name",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "code",
      "rowKey": "domains",
      "label": "exam.competency.props.code",
      "model": "t.code",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   },
   {
    "legend": "exam.competency.props.indicator",
    "when": null,
    "repeat": null,
    "fields": []
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "exam.competency.props.name",
    "model": "d.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "grade",
    "label": "exam.grade.grade",
    "model": "d.grade",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "grades"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "exam.competency.props.description",
    "model": "d.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Exam.Grade": {
  "preRequisite": [],
  "fieldsets": [
   {
    "legend": null,
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "code",
      "rowKey": "records",
      "label": "exam.grade.props.code",
      "model": "a.code",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "min_score",
      "rowKey": "records",
      "label": "exam.grade.props.min_score",
      "model": "a.minScore",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "max_score",
      "rowKey": "records",
      "label": "exam.grade.props.max_score",
      "model": "a.maxScore",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "value",
      "rowKey": "records",
      "label": "exam.grade.props.value",
      "model": "a.value",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "label",
      "rowKey": "records",
      "label": "exam.grade.props.label",
      "model": "a.label",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "switch",
      "name": "is_fail_grade",
      "rowKey": "records",
      "label": "exam.grade.props.fail_grade",
      "model": "a.isFailGrade",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "exam.grade.props.name",
    "model": "c.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "exam.grade.props.description",
    "model": "c.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Exam.Observation": {
  "preRequisite": [
   "grades"
  ],
  "fieldsets": [
   {
    "legend": null,
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "name",
      "rowKey": "records",
      "label": "exam.observation.props.name",
      "model": "a.name",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "code",
      "rowKey": "records",
      "label": "exam.observation.props.code",
      "model": "a.code",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "max_mark",
      "rowKey": "records",
      "label": "exam.observation.props.max_mark",
      "model": "a.maxMark",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "exam.observation.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "grade",
    "label": "exam.grade.grade",
    "model": "t.grade",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "grades"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "exam.observation.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Exam.OnlineExam": {
  "preRequisite": [
   "types",
   "subjects"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "title",
    "label": "exam.online_exam.props.title",
    "model": "t.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "type",
    "label": "exam.online_exam.props.type",
    "model": "t.type",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "date",
    "name": "date",
    "label": "exam.online_exam.props.date",
    "model": "t.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "start_time",
    "label": "exam.online_exam.props.start_time",
    "model": "t.startTime",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "exam.online_exam.props.end_date",
    "model": "t.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "end_time",
    "label": "exam.online_exam.props.end_time",
    "model": "t.endTime",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select-search",
    "name": "batches",
    "label": "academic.batch.batch",
    "model": "t.batches",
    "valueProp": "uuid",
    "searchAction": "academic/batch/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/academic/batches"
   },
   {
    "type": "select",
    "name": "subject",
    "label": "academic.subject.subject",
    "model": "t.subject",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "subjects"
   },
   {
    "type": "input",
    "name": "pass_percentage",
    "label": "exam.online_exam.props.pass_percentage",
    "model": "t.passPercentage",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_negative_marking",
    "label": "exam.online_exam.props.has_negative_marking",
    "model": "t.hasNegativeMarking",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "negative_mark_percent_per_question",
    "label": "exam.online_exam.props.negative_mark_percent_per_question",
    "model": "t.negativeMarkPercentPerQuestion",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Exam.Schedule": {
  "preRequisite": [
   "exams",
   "assessments",
   "observations",
   "competencies",
   "grades"
  ],
  "fieldsets": [
   {
    "legend": "exam.mark_recorded",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "date",
      "name": "date",
      "rowKey": "records",
      "label": "exam.schedule.props.date",
      "model": "e.date",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": true,
      "when": null
     },
     {
      "type": "input",
      "name": null,
      "model": "o.marks",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "date",
      "name": "start_time",
      "rowKey": "records",
      "label": "exam.schedule.props.start_time",
      "model": "e.startTime",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "duration",
      "rowKey": "records",
      "label": "exam.schedule.props.duration",
      "model": "e.duration",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   },
   {
    "legend": "academic.subject.additional_subject",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "name",
      "rowKey": "additionalSubjects",
      "label": "academic.subject.props.name",
      "model": "e.name",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "code",
      "rowKey": "additionalSubjects",
      "label": "academic.subject.props.code",
      "model": "e.code",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "date",
      "name": "date",
      "rowKey": "additionalSubjects",
      "label": "exam.schedule.props.date",
      "model": "e.date",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": true,
      "when": null
     },
     {
      "type": "date",
      "name": "start_time",
      "rowKey": "additionalSubjects",
      "label": "exam.schedule.props.start_time",
      "model": "e.startTime",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "duration",
      "rowKey": "additionalSubjects",
      "label": "exam.schedule.props.duration",
      "model": "e.duration",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "select",
    "name": "exam",
    "label": "exam.exam",
    "model": "n.exam",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "exams"
   },
   {
    "type": "select-search",
    "name": "batch",
    "label": "academic.batch.batch",
    "model": "c.selectedBatch",
    "valueProp": "uuid",
    "searchAction": "academic/batch/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/academic/batches"
   },
   {
    "type": "switch",
    "name": "is_reassessment",
    "label": "global.is",
    "labelAttr": "exam.schedule.reassessment",
    "model": "n.isReassessment",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "grade",
    "label": "exam.grade.grade",
    "model": "n.grade",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "mode==edit",
    "optionsKey": "grades"
   },
   {
    "type": "select",
    "name": "assessment",
    "label": "exam.assessment.assessment",
    "model": "c.selectedAssessment",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "assessments"
   },
   {
    "type": "select",
    "name": "observation",
    "label": "exam.observation.observation",
    "model": "n.observation",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "observations"
   },
   {
    "type": "select",
    "name": "competency",
    "label": "exam.competency.competency",
    "model": "n.competency",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "competencies"
   },
   {
    "type": "date",
    "name": "last_exam_date",
    "label": "exam.schedule.props.last_exam_date",
    "model": "n.lastExamDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "exam.schedule.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Exam.Term": {
  "preRequisite": [
   "divisions"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "exam.term.props.name",
    "model": "a.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "division",
    "label": "academic.division.division",
    "model": "a.division",
    "labelProp": "nameWithProgram",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "divisions"
   },
   {
    "type": "input",
    "name": "display_name",
    "label": "exam.term.props.display_name",
    "model": "a.displayName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "exam.term.props.description",
    "model": "a.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Finance.DayClosure": {
  "preRequisite": [
   "denominations"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "date",
    "name": "date",
    "label": "finance.day_closure.props.date",
    "model": "e.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": "mode==create"
   },
   {
    "type": "input",
    "name": "count",
    "rowKey": "denominations",
    "label": "finance.day_closure.props.count",
    "model": "o.count",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "reason",
    "label": "finance.day_closure.props.reason",
    "model": "e.reason",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "finance.day_closure.props.remarks",
    "model": "e.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Finance.FeeConcession": {
  "preRequisite": [
   "heads",
   "types"
  ],
  "fieldsets": [
   {
    "legend": null,
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "radio-group",
      "name": "type",
      "rowKey": "records",
      "model": "e.type",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "types"
     },
     {
      "type": "input",
      "name": "value",
      "rowKey": "records",
      "label": "finance.fee_concession.props.value",
      "model": "e.value",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==percent",
      "whenAny": [
       "type==amount",
       "type==percent"
      ]
     },
     {
      "type": "radio-group",
      "name": "secondary_type",
      "rowKey": "records",
      "model": "e.secondaryType",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "secondary_value",
      "rowKey": "records",
      "label": "finance.fee_concession.props.value",
      "model": "e.secondaryValue",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "secondary_type==percent",
      "whenAny": [
       "secondary_type==amount",
       "secondary_type==percent"
      ]
     }
    ]
   },
   {
    "legend": "transport.fee.fee",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "radio-group",
      "name": "transport_type",
      "model": "n.transportType",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "types"
     },
     {
      "type": "input",
      "name": "transport_value",
      "label": "finance.fee_concession.props.value",
      "model": "n.transportValue",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "transport_type==percent",
      "whenAny": [
       "transport_type==amount",
       "transport_type==percent"
      ]
     },
     {
      "type": "radio-group",
      "name": "transport_secondary_type",
      "model": "n.transportSecondaryType",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "types"
     },
     {
      "type": "input",
      "name": "transport_secondary_value",
      "label": "finance.fee_concession.props.value",
      "model": "n.transportSecondaryValue",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "transport_secondary_type==percent",
      "whenAny": [
       "transport_secondary_type==amount",
       "transport_secondary_type==percent"
      ]
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "finance.fee_concession.props.name",
    "model": "n.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "finance.fee_concession.props.code",
    "model": "n.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "enable_secondary_concession",
    "label": "global.enable",
    "labelAttr": "finance.fee_concession.secondary_concession",
    "model": "n.enableSecondaryConcession",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "finance.fee_concession.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Finance.FeeGroup": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "finance.fee_group.props.name",
    "model": "n.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "finance.fee_group.props.code",
    "model": "n.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "shortcode",
    "label": "finance.fee_group.props.shortcode",
    "model": "n.shortcode",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "pg_account",
    "label": "finance.config.props.pg_account",
    "model": "n.pgAccount",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "finance.fee_group.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Finance.FeeHead": {
  "preRequisite": [
   "feeGroups",
   "types"
  ],
  "fieldsets": [
   {
    "legend": "finance.tax.props.components",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "name",
      "rowKey": "components",
      "label": "finance.tax.props.name",
      "model": "o.name",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "select",
      "name": "tax",
      "rowKey": "components",
      "label": "finance.tax.tax",
      "model": "o.tax",
      "labelProp": "codeWithRate",
      "valueProp": "uuid",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "taxes"
     },
     {
      "type": "input",
      "name": "hsn_code",
      "rowKey": "components",
      "label": "finance.tax.props.hsn_code",
      "model": "o.hsnCode",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "finance.fee_head.props.name",
    "model": "a.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "fee_group",
    "label": "finance.fee_group.fee_group",
    "model": "a.feeGroup",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "feeGroups"
   },
   {
    "type": "select",
    "name": "type",
    "label": "finance.fee_head.props.type",
    "model": "a.type",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "input",
    "name": "code",
    "label": "finance.fee_head.props.code",
    "model": "a.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "shortcode",
    "label": "finance.fee_head.props.shortcode",
    "model": "a.shortcode",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_components",
    "label": "global.has_attribute",
    "labelAttr": "finance.fee_head.props.components",
    "model": "a.hasComponents",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "tax",
    "label": "finance.tax.tax",
    "model": "a.tax",
    "labelProp": "codeWithRate",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "taxes"
   },
   {
    "type": "input",
    "name": "hsn_code",
    "label": "finance.tax.props.hsn_code",
    "model": "a.hsnCode",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "finance.fee_head.props.description",
    "model": "a.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Finance.FeeStructure": {
  "preRequisite": [
   "transportFees",
   "feeGroups",
   "frequencies"
  ],
  "fieldsets": [
   {
    "legend": "finance.fee_structure.installment_number",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": null,
      "label": "finance.fee_structure.props.title",
      "model": "n.title",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "date",
      "name": null,
      "label": "finance.fee_structure.props.due_date",
      "model": "n.dueDate",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": true,
      "when": null
     },
     {
      "type": "input",
      "name": null,
      "label": "finance.fee_structure.props.is_optional",
      "model": "s.amount",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "checkbox",
      "name": null,
      "label": "finance.fee_structure.props.has_transport_fee",
      "model": "n.hasTransportFee",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "select",
      "name": null,
      "label": "transport.fee.fee",
      "model": "n.transportFee",
      "labelProp": "name",
      "valueProp": "uuid",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "checkbox",
      "name": null,
      "label": "finance.fee_structure.props.has_late_fee",
      "model": "n.hasLateFee",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "select",
      "name": null,
      "label": "finance.fee_structure.props.late_fee_frequency",
      "model": "n.lateFeeFrequency",
      "labelProp": "label",
      "valueProp": "value",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": null,
      "label": "finance.fee_structure.props.late_fee_value",
      "model": "n.lateFeeValue",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "checkbox",
      "name": null,
      "label": "finance.fee_concession.no_concession",
      "model": "n.hasNoConcession",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "finance.fee_structure.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "finance.fee_structure.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Finance.FeeStructureComponent": {
  "preRequisite": [
   "feeHeads",
   "feeComponents"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "fee_structure",
    "label": "finance.fee_structure.fee_structure",
    "model": "a.feeStructure",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "feeStructures"
   },
   {
    "type": "select",
    "name": "fee_head",
    "label": "finance.fee_head.fee_head",
    "model": "a.feeHead",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "feeHeads"
   },
   {
    "type": "input",
    "name": "amount",
    "rowKey": "components",
    "model": "t.amount",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Finance.Ledger": {
  "preRequisite": [
   "ledgerTypes"
  ],
  "fieldsets": [
   {
    "legend": "finance.account.info",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "account_name",
      "label": "finance.account.props.name",
      "model": "a.account.name",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "account_number",
      "label": "finance.account.props.number",
      "model": "a.account.number",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "account_bank_name",
      "label": "finance.account.props.bank_name",
      "model": "a.account.bankName",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "account_branch_name",
      "label": "finance.account.props.branch_name",
      "model": "a.account.branchName",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "account_branch_address",
      "label": "finance.account.props.branch_address",
      "model": "a.account.branchAddress",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "account_branch_code",
      "label": "finance.account.props.branch_code",
      "model": "a.account.branchCode",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   },
   {
    "legend": "contact.info",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "contact_number",
      "label": "finance.ledger.props.contact_number",
      "model": "a.contactNumber",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "email",
      "label": "finance.ledger.props.email",
      "model": "a.email",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "address-input",
      "name": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "finance.ledger.props.name",
    "model": "a.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "finance.ledger.props.alias",
    "model": "a.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "finance.ledger.props.code",
    "model": "a.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "type",
    "label": "global.select",
    "labelAttr": "finance.ledger_type.ledger_type",
    "model": "u.selectedLedgerType",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "ledgerTypes"
   },
   {
    "type": "input",
    "name": "opening_balance",
    "label": "finance.ledger.props.opening_balance",
    "model": "a.openingBalance",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "finance.ledger.props.description",
    "model": "a.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Finance.LedgerType": {
  "preRequisite": [
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "finance.ledger_type.props.name",
    "model": "n.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "finance.ledger_type.props.alias",
    "model": "n.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "parent",
    "label": "finance.ledger_type.props.parent",
    "model": "n.parent",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "finance.ledger_type.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Finance.PaymentMethod": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "finance.payment_method.props.name",
    "model": "n.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "finance.payment_method.props.code",
    "model": "n.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_payment_gateway",
    "label": "finance.payment_method.props.is_payment_gateway",
    "model": "n.isPaymentGateway",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "payment_gateway_name",
    "label": "finance.payment_method.props.payment_gateway_name",
    "model": "n.paymentGatewayName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_instrument_number",
    "label": "finance.payment_method.props.has_instrument_number",
    "model": "n.hasInstrumentNumber",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_instrument_date",
    "label": "finance.payment_method.props.has_instrument_date",
    "model": "n.hasInstrumentDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_clearing_date",
    "label": "finance.payment_method.props.has_clearing_date",
    "model": "n.hasClearingDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_bank_detail",
    "label": "finance.payment_method.props.has_bank_detail",
    "model": "n.hasBankDetail",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_branch_detail",
    "label": "finance.payment_method.props.has_branch_detail",
    "model": "n.hasBranchDetail",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_reference_number",
    "label": "finance.payment_method.props.has_reference_number",
    "model": "n.hasReferenceNumber",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_card_provider",
    "label": "finance.payment_method.props.has_card_provider",
    "model": "n.hasCardProvider",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "finance.payment_method.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Finance.Receipt": {
  "preRequisite": [
   "types",
   "categories",
   "paymentMethods",
   "primaryLedgers",
   "secondaryLedgers",
   "bankNames",
   "cardProviders"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "student",
    "label": "student.student",
    "model": "a.student",
    "valueProp": "uuid",
    "searchAction": "student/summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==student",
    "endpoint": "/app/students/summary",
    "displayFormat": "{name} - {codeNumber} ({contactNumber})"
   },
   {
    "type": "select-search",
    "name": "employee",
    "label": "employee.employee",
    "model": "a.employee",
    "valueProp": "uuid",
    "searchAction": "employee/summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==employee",
    "endpoint": "/app/employees/summary"
   },
   {
    "type": "input",
    "name": "name",
    "label": "contact.props.name",
    "model": "a.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==other"
   },
   {
    "type": "input",
    "name": "contact_number",
    "label": "contact.props.contact_number",
    "model": "a.contactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==other"
   },
   {
    "type": "date",
    "name": "date",
    "label": "finance.transaction.props.date",
    "model": "a.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "amount",
    "label": "finance.transaction.props.amount",
    "model": "a.amount",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "secondary_ledger",
    "label": "global.select",
    "labelAttr": "finance.transaction.props.head",
    "model": "a.secondaryLedger",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "secondaryLedgers"
   },
   {
    "type": "select",
    "name": "primary_ledger",
    "label": "global.select",
    "labelAttr": "finance.ledger.ledger",
    "model": "a.primaryLedger",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "primaryLedgers"
   },
   {
    "type": "select",
    "name": "payment_method",
    "label": "finance.payment_method.payment_method",
    "model": "a.paymentMethod",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "paymentMethods"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "finance.transaction.props.description",
    "model": "a.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "finance.transaction.props.remarks",
    "model": "a.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Finance.Transaction": {
  "preRequisite": [
   "types",
   "categories",
   "paymentMethods",
   "primaryLedgers",
   "bankNames",
   "cardProviders"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "category",
    "label": "global.select",
    "labelAttr": "finance.transaction.category.category",
    "model": "a.category",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "categories"
   },
   {
    "type": "select",
    "name": "primary_ledger",
    "label": "global.select",
    "labelAttr": "finance.ledger.ledger",
    "model": "a.primaryLedger",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "primaryLedgers"
   },
   {
    "type": "date",
    "name": "date",
    "label": "finance.transaction.props.date",
    "model": "a.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "select-search",
    "name": "secondary_ledger",
    "rowKey": "records",
    "label": "global.select",
    "labelAttr": "finance.ledger.secondary_ledger",
    "model": "e.secondaryLedger",
    "labelProp": "name",
    "valueProp": "uuid",
    "searchAction": "finance/ledger/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/finance/ledgers"
   },
   {
    "type": "input",
    "name": "amount",
    "rowKey": "records",
    "label": "finance.transaction.props.amount",
    "model": "e.amount",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==transfer"
   },
   {
    "type": "select",
    "name": "payment_method",
    "label": "finance.payment_method.payment_method",
    "model": "a.paymentMethod",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "paymentMethods"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "finance.transaction.props.description",
    "model": "a.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "finance.transaction.props.remarks",
    "model": "a.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Form.Form": {
  "preRequisite": [
   "fieldTypes"
  ],
  "fieldsets": [
   {
    "legend": "form.props.field",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select",
      "name": "type",
      "rowKey": "fields",
      "label": "global.select",
      "labelAttr": "custom_field.props.type",
      "model": "e.type",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "label",
      "rowKey": "fields",
      "label": "custom_field.props.label",
      "model": "e.label",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "name",
      "rowKey": "fields",
      "label": "custom_field.props.name",
      "model": "e.name",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==file_upload"
     },
     {
      "type": "switch",
      "name": "is_required",
      "rowKey": "fields",
      "label": "custom_field.props.is_required",
      "model": "e.isRequired",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==file_upload"
     },
     {
      "type": "input",
      "name": "min_length",
      "rowKey": "fields",
      "label": "custom_field.props.min_length",
      "model": "e.minLength",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==multi_line_text_input"
     },
     {
      "type": "input",
      "name": "max_length",
      "rowKey": "fields",
      "label": "custom_field.props.max_length",
      "model": "e.maxLength",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "min_value",
      "rowKey": "fields",
      "label": "custom_field.props.min_value",
      "model": "e.minValue",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==currency_input"
     },
     {
      "type": "input",
      "name": "max_value",
      "rowKey": "fields",
      "label": "custom_field.props.max_value",
      "model": "e.maxValue",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==currency_input"
     },
     {
      "type": "input",
      "name": "options",
      "rowKey": "fields",
      "label": "custom_field.props.options",
      "model": "e.options",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "type==radio_input"
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "form.props.name",
    "model": "n.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "due_date",
    "label": "form.props.due_date",
    "model": "n.dueDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "summary",
    "label": "form.props.summary",
    "model": "n.summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "form.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Gallery.Gallery": {
  "preRequisite": [
   "types",
   "studentAudienceTypes",
   "employeeAudienceTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "title",
    "label": "gallery.props.title",
    "model": "s.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "date",
    "label": "gallery.props.date",
    "model": "s.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "select",
    "name": "type",
    "label": "gallery.props.type",
    "model": "s.type",
    "labelProp": "label",
    "valueProp": "value",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "switch",
    "name": "is_public",
    "label": "gallery.props.is_public",
    "model": "s.isPublic",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "excerpt",
    "label": "gallery.props.excerpt",
    "model": "s.excerpt",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "gallery.props.description",
    "model": "s.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "General.BulkUpload": {
  "preRequisite": [
   "actions"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "action",
    "label": "general.action",
    "model": "t.action",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "actions"
   }
  ]
 },
 "Helpdesk.Faq": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "question",
    "label": "helpdesk.faq.props.question",
    "model": "t.question",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "category",
    "label": "helpdesk.faq.category.category",
    "model": "t.category",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "categories"
   },
   {
    "type": "select-search",
    "name": "tags",
    "label": "global.select",
    "labelAttr": "general.tag",
    "model": "t.tags",
    "searchAction": "tag/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/tags"
   },
   {
    "type": "switch",
    "name": "is_published",
    "label": "helpdesk.faq.props.publish",
    "model": "t.isPublished",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Helpdesk.Ticket": {
  "preRequisite": [
   "categories",
   "priorities",
   "lists",
   "customFields"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "title",
    "label": "helpdesk.ticket.props.title",
    "model": "o.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "category",
    "label": "global.select",
    "labelAttr": "helpdesk.ticket.category.category",
    "model": "o.category",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "categories"
   },
   {
    "type": "select",
    "name": "priority",
    "label": "global.select",
    "labelAttr": "helpdesk.ticket.priority.priority",
    "model": "o.priority",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "priorities"
   }
  ]
 },
 "Hostel.Block": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "hostel.block.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "hostel.block.props.alias",
    "model": "t.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "contact_number",
    "label": "hostel.block.props.contact_number",
    "model": "t.contactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "contact_email",
    "label": "hostel.block.props.contact_email",
    "model": "t.contactEmail",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "address",
    "label": "hostel.block.props.address",
    "model": "t.address",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "hostel.block.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Hostel.BlockIncharge": {
  "preRequisite": [
   "blocks"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "block",
    "label": "hostel.block.block",
    "model": "a.block",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "blocks"
   },
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "a.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.incharge.props.start_date",
    "model": "a.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.incharge.props.end_date",
    "model": "a.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "employee.incharge.props.remarks",
    "model": "a.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Hostel.Floor": {
  "preRequisite": [
   "blocks"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "hostel.floor.props.name",
    "model": "s.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "hostel.floor.props.alias",
    "model": "s.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "block",
    "label": "hostel.block.block",
    "model": "s.block",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "blocks"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "hostel.floor.props.description",
    "model": "s.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Hostel.Room": {
  "preRequisite": [
   "floors"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "hostel.room.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number",
    "label": "hostel.room.props.number",
    "model": "t.number",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "floor",
    "label": "hostel.floor.floor",
    "model": "t.floor",
    "labelProp": "nameWithBlock",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "floors"
   },
   {
    "type": "input",
    "name": "capacity",
    "label": "hostel.room.props.capacity",
    "model": "t.capacity",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "hostel.room.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Hostel.RoomAllocation": {
  "preRequisite": [
   "rooms"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "room",
    "label": "hostel.room.room",
    "model": "a.room",
    "labelProp": "fullName",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "rooms"
   },
   {
    "type": "select-search",
    "name": "student",
    "label": "global.select",
    "labelAttr": "student.student",
    "model": "a.student",
    "valueProp": "uuid",
    "searchAction": "student/summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/students/summary",
    "displayFormat": "{name} - {codeNumber} ({contactNumber})"
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "hostel.room_allocation.props.start_date",
    "model": "a.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "hostel.room_allocation.props.end_date",
    "model": "a.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "hostel.room_allocation.props.remarks",
    "model": "a.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Inventory.Inventory": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "inventory.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "inventory.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Inventory.Incharge": {
  "preRequisite": [
   "inventories"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "inventory",
    "label": "inventory.inventory",
    "model": "o.inventory",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "inventories"
   },
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "o.employee",
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/list"
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.incharge.props.start_date",
    "model": "o.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.incharge.props.end_date",
    "model": "o.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "employee.incharge.props.remarks",
    "model": "o.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Inventory.StockAdjustment": {
  "preRequisite": [
   "inventories",
   "places"
  ],
  "fieldsets": [
   {
    "legend": "inventory.item",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select-search",
      "name": "item",
      "rowKey": "items",
      "label": "global.select",
      "labelAttr": "inventory.stock_item.stock_item",
      "model": "t.item",
      "valueProp": "uuid",
      "searchAction": "inventory/stockItem/list",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "endpoint": "/app/inventory/stock-items"
     },
     {
      "type": "input",
      "name": "quantity",
      "rowKey": "items",
      "label": "inventory.stock_adjustment.props.quantity",
      "model": "t.quantity",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "textarea",
      "name": "description",
      "rowKey": "items",
      "label": "inventory.stock_adjustment.props.description",
      "model": "t.description",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "select",
    "name": "inventory",
    "label": "inventory.inventory",
    "model": "n.inventory",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "inventories"
   },
   {
    "type": "select",
    "name": "place",
    "label": "inventory.place",
    "model": "n.place",
    "labelProp": "fullName",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "places"
   },
   {
    "type": "date",
    "name": "date",
    "label": "inventory.stock_adjustment.props.date",
    "model": "n.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "inventory.stock_adjustment.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Inventory.StockCategory": {
  "preRequisite": [
   "inventories"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "inventory.stock_category.props.name",
    "model": "n.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "inventory",
    "label": "inventory.inventory",
    "model": "n.inventory",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "inventories"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "inventory.stock_category.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Inventory.StockItem": {
  "preRequisite": [
   "stockCategories",
   "inventories",
   "places",
   "units",
   "types",
   "trackingTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "inventory.unit.unit",
    "model": "o.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "category",
    "label": "inventory.stock_category.stock_category",
    "model": "o.category",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "categories"
   },
   {
    "type": "select",
    "name": "type",
    "label": "inventory.stock_item.props.type",
    "model": "o.type",
    "labelProp": "label",
    "valueProp": "value",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "input",
    "name": "code",
    "label": "inventory.stock_item.props.code",
    "model": "o.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "unit",
    "label": "inventory.stock_item.props.unit",
    "model": "o.unit",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "units"
   },
   {
    "type": "select",
    "name": "place",
    "label": "inventory.place",
    "model": "o.place",
    "labelProp": "fullName",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "places"
   },
   {
    "type": "input",
    "name": "quantity",
    "label": "inventory.stock_item.props.quantity",
    "model": "o.quantity",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "inventory.stock_item.props.description",
    "model": "o.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Inventory.StockPurchase": {
  "preRequisite": [
   "inventories",
   "vendors",
   "places"
  ],
  "fieldsets": [
   {
    "legend": "inventory.item",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select-search",
      "name": "item",
      "rowKey": "items",
      "label": "global.select",
      "labelAttr": "inventory.stock_item.stock_item",
      "model": "e.item",
      "valueProp": "uuid",
      "searchAction": "inventory/stockItem/list",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "endpoint": "/app/inventory/stock-items"
     },
     {
      "type": "input",
      "name": "quantity",
      "rowKey": "items",
      "label": "inventory.stock_purchase.props.quantity",
      "model": "e.quantity",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "unit_price",
      "rowKey": "items",
      "label": "inventory.stock_purchase.props.unit_price",
      "model": "e.unitPrice",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "textarea",
      "name": "description",
      "rowKey": "items",
      "label": "inventory.stock_purchase.props.description",
      "model": "e.description",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "switch",
    "name": "has_item",
    "label": "inventory.stock_purchase.props.has_items",
    "model": "n.hasItems",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "inventory",
    "label": "inventory.inventory",
    "model": "n.inventory",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "inventories"
   },
   {
    "type": "select",
    "name": "vendor",
    "label": "inventory.vendor.vendor",
    "model": "n.vendor",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "vendors"
   },
   {
    "type": "select",
    "name": "place",
    "label": "inventory.place",
    "model": "n.place",
    "labelProp": "fullName",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "places"
   },
   {
    "type": "date",
    "name": "date",
    "label": "inventory.stock_purchase.props.date",
    "model": "n.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "voucher_number",
    "label": "inventory.stock_purchase.props.voucher_number",
    "model": "n.voucherNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "amount",
    "label": "inventory.stock_purchase.props.amount",
    "model": "n.amount",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "inventory.stock_purchase.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Inventory.StockRequisition": {
  "preRequisite": [
   "inventories",
   "vendors",
   "places"
  ],
  "fieldsets": [
   {
    "legend": "inventory.item",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select-search",
      "name": "item",
      "rowKey": "items",
      "label": "global.select",
      "labelAttr": "inventory.stock_item.stock_item",
      "model": "e.item",
      "valueProp": "uuid",
      "searchAction": "inventory/stockItem/list",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "endpoint": "/app/inventory/stock-items"
     },
     {
      "type": "input",
      "name": "quantity",
      "rowKey": "items",
      "label": "inventory.stock_requisition.props.quantity",
      "model": "e.quantity",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "textarea",
      "name": "description",
      "rowKey": "items",
      "label": "inventory.stock_requisition.props.description",
      "model": "e.description",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "select",
    "name": "inventory",
    "label": "inventory.inventory",
    "model": "n.inventory",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "inventories"
   },
   {
    "type": "select",
    "name": "vendor",
    "label": "inventory.vendor.vendor",
    "model": "n.vendor",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "vendors"
   },
   {
    "type": "select",
    "name": "place",
    "label": "inventory.place",
    "model": "n.place",
    "labelProp": "fullName",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "places"
   },
   {
    "type": "select-search",
    "name": "employee",
    "label": "employee.employee",
    "model": "n.employee",
    "valueProp": "uuid",
    "searchAction": "employee/summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/summary"
   },
   {
    "type": "date",
    "name": "date",
    "label": "inventory.stock_requisition.props.date",
    "model": "n.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "message_to_vendor",
    "label": "inventory.stock_requisition.props.message_to_vendor",
    "model": "n.messageToVendor",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Inventory.StockReturn": {
  "preRequisite": [
   "inventories",
   "vendors",
   "places"
  ],
  "fieldsets": [
   {
    "legend": "inventory.item",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select-search",
      "name": "item",
      "rowKey": "items",
      "label": "global.select",
      "labelAttr": "inventory.stock_item.stock_item",
      "model": "e.item",
      "valueProp": "uuid",
      "searchAction": "inventory/stockItem/list",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "endpoint": "/app/inventory/stock-items"
     },
     {
      "type": "input",
      "name": "quantity",
      "rowKey": "items",
      "label": "inventory.stock_return.props.quantity",
      "model": "e.quantity",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "unit_price",
      "rowKey": "items",
      "label": "inventory.stock_return.props.unit_price",
      "model": "e.unitPrice",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "textarea",
      "name": "description",
      "rowKey": "items",
      "label": "inventory.stock_return.props.description",
      "model": "e.description",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "switch",
    "name": "has_item",
    "label": "inventory.stock_return.props.has_items",
    "model": "n.hasItems",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "inventory",
    "label": "inventory.inventory",
    "model": "n.inventory",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "inventories"
   },
   {
    "type": "select",
    "name": "vendor",
    "label": "inventory.vendor.vendor",
    "model": "n.vendor",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "vendors"
   },
   {
    "type": "select",
    "name": "place",
    "label": "inventory.place",
    "model": "n.place",
    "labelProp": "fullName",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "places"
   },
   {
    "type": "date",
    "name": "date",
    "label": "inventory.stock_return.props.date",
    "model": "n.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "voucher_number",
    "label": "inventory.stock_return.props.voucher_number",
    "model": "n.voucherNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "amount",
    "label": "inventory.stock_return.props.amount",
    "model": "n.amount",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "inventory.stock_return.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Inventory.StockTransfer": {
  "preRequisite": [
   "inventories",
   "places"
  ],
  "fieldsets": [
   {
    "legend": "inventory.item",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select-search",
      "name": "item",
      "rowKey": "items",
      "label": "global.select",
      "labelAttr": "inventory.stock_item.stock_item",
      "model": "e.item",
      "valueProp": "uuid",
      "searchAction": "inventory/stockItemWithCopy/list",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "endpoint": "/app/inventory/stock-items-with-copies"
     },
     {
      "type": "input",
      "name": "quantity",
      "rowKey": "items",
      "label": "inventory.stock_transfer.props.quantity",
      "model": "e.quantity",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "textarea",
      "name": "description",
      "rowKey": "items",
      "label": "inventory.stock_transfer.props.description",
      "model": "e.description",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "select",
    "name": "inventory",
    "label": "inventory.inventory",
    "model": "n.inventory",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "inventories"
   },
   {
    "type": "select",
    "name": "from_place",
    "label": "inventory.stock_transfer.props.from",
    "model": "n.fromPlace",
    "labelProp": "fullName",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "places"
   },
   {
    "type": "select",
    "name": "to_place",
    "label": "inventory.stock_transfer.props.to",
    "model": "n.toPlace",
    "labelProp": "fullName",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "places"
   },
   {
    "type": "date",
    "name": "date",
    "label": "inventory.stock_transfer.props.date",
    "model": "n.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "inventory.stock_transfer.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Inventory.Vendor": {
  "preRequisite": [
   "ledgerTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "finance.ledger.props.name",
    "model": "n.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "contact_number",
    "label": "finance.ledger.props.contact_number",
    "model": "n.contactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "email",
    "label": "finance.ledger.props.email",
    "model": "n.email",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Library.Book": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "title",
    "label": "library.book.props.title",
    "model": "l.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "sub_title",
    "label": "library.book.props.sub_title",
    "model": "l.subTitle",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select-search",
    "name": "author",
    "label": "global.select",
    "labelAttr": "library.book.props.author",
    "model": "l.author",
    "labelProp": "name",
    "valueProp": "uuid",
    "searchAction": "option/list",
    "inputType": "book_author",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/options"
   },
   {
    "type": "select-search",
    "name": "publisher",
    "label": "global.select",
    "labelAttr": "library.book.props.publisher",
    "model": "l.publisher",
    "labelProp": "name",
    "valueProp": "uuid",
    "searchAction": "option/list",
    "inputType": "book_publisher",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/options"
   },
   {
    "type": "select-search",
    "name": "language",
    "label": "global.select",
    "labelAttr": "library.book.props.language",
    "model": "l.language",
    "labelProp": "name",
    "valueProp": "uuid",
    "searchAction": "option/list",
    "inputType": "book_language",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/options"
   },
   {
    "type": "select-search",
    "name": "topic",
    "label": "global.select",
    "labelAttr": "library.book.props.topic",
    "model": "l.topic",
    "labelProp": "name",
    "valueProp": "uuid",
    "searchAction": "option/list",
    "inputType": "book_topic",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/options"
   },
   {
    "type": "input",
    "name": "subject",
    "label": "library.book.props.subject",
    "model": "l.subject",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "year_published",
    "label": "library.book.props.year_published",
    "model": "l.yearPublished",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "volume",
    "label": "library.book.props.volume",
    "model": "l.volume",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "isbn_number",
    "label": "library.book.props.isbn_number",
    "model": "l.isbnNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "call_number",
    "label": "library.book.props.call_number",
    "model": "l.callNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "edition",
    "label": "library.book.props.edition",
    "model": "l.edition",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "page",
    "label": "library.book.props.page",
    "model": "l.page",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "price",
    "label": "library.book.props.price",
    "model": "l.price",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "summary",
    "label": "library.book.props.summary",
    "model": "l.summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Library.BookAddition": {
  "preRequisite": [
   "conditions"
  ],
  "fieldsets": [
   {
    "legend": "library.book.book",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "button",
      "name": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "select-search",
      "name": "book",
      "rowKey": "copies",
      "label": "global.select",
      "labelAttr": "library.book.book",
      "model": "a.book",
      "labelProp": "title",
      "valueProp": "uuid",
      "searchAction": "library/book/list",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "endpoint": "/app/library/books"
     },
     {
      "type": "input",
      "name": "number",
      "rowKey": "copies",
      "label": "library.book_addition.props.number",
      "model": "a.number",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "select",
      "name": "detail",
      "rowKey": "copies",
      "label": "global.select",
      "labelAttr": "library.book_condition.book_condition",
      "model": "a.condition",
      "labelProp": "name",
      "valueProp": "uuid",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "vendor",
      "rowKey": "copies",
      "label": "library.book_addition.props.vendor",
      "model": "a.vendor",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "invoice_number",
      "rowKey": "copies",
      "label": "library.book_addition.props.invoice_number",
      "model": "a.invoiceNumber",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "date",
      "name": "invoice_date",
      "label": "library.book_addition.props.invoice_date",
      "model": "a.invoiceDate",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": true,
      "when": null,
      "rowKey": "copies"
     },
     {
      "type": "input",
      "name": "room_number",
      "rowKey": "copies",
      "label": "library.book_addition.props.room_number",
      "model": "a.roomNumber",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "rack_number",
      "rowKey": "copies",
      "label": "library.book_addition.props.rack_number",
      "model": "a.rackNumber",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "shelf_number",
      "rowKey": "copies",
      "label": "library.book_addition.props.shelf_number",
      "model": "a.shelfNumber",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "date",
    "name": "date",
    "label": "library.book_addition.props.date",
    "model": "l.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "library.book_addition.props.remarks",
    "model": "l.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Library.Transaction": {
  "preRequisite": [
   "to"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "to",
    "model": "r.to",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "to"
   },
   {
    "type": "select-search",
    "name": "requester",
    "model": "r.requester",
    "valueProp": "uuid",
    "searchAction": "student/summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "to==employee",
    "endpoint": "/app/students/summary",
    "whenAny": [
     "to==employee",
     "to==student"
    ]
   },
   {
    "type": "date",
    "name": "issue_date",
    "model": "r.issueDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "due_date",
    "model": "r.dueDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "select-search",
    "name": "copy",
    "rowKey": "records",
    "model": "e.copy",
    "searchAction": "library/bookCopy/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/library/bookCopys"
   },
   {
    "type": "textarea",
    "name": "remarks",
    "model": "r.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Mess.Meal": {
  "preRequisite": [
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "mess.meal.props.name",
    "model": "a.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "type",
    "label": "mess.meal.props.type",
    "model": "a.type",
    "labelProp": "label",
    "valueProp": "value",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "mess.meal.props.description",
    "model": "a.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Mess.MealLog": {
  "preRequisite": [
   "meals",
   "menuItems"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "meal",
    "label": "mess.meal.meal",
    "model": "o.meal",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "meals"
   },
   {
    "type": "date",
    "name": "date",
    "label": "mess.meal.log.props.date",
    "model": "o.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "select",
    "name": "menu_items",
    "label": "global.select",
    "labelAttr": "mess.menu.item",
    "model": "o.menuItems",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "menuItems"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "mess.meal.log.props.description",
    "model": "o.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "mess.meal.log.props.remarks",
    "model": "o.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Mess.MenuItem": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "mess.menu.props.name",
    "model": "s.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "mess.menu.props.description",
    "model": "s.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "News.News": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "title",
    "model": "s.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "sub_title",
    "model": "s.subTitle",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "editor",
    "name": "content",
    "label": null,
    "labelAttr": null,
    "when": null,
    "inputType": null,
    "required": true,
    "rowKey": null
   }
  ]
 },
 "Option": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "model": "a.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "model": "a.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Organization.Organization": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "organization.props.name",
    "model": "a.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "organization.props.code",
    "model": "a.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "contact_number",
    "label": "organization.props.contact_number",
    "model": "a.contactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "email",
    "label": "organization.props.email",
    "model": "a.email",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "website",
    "label": "organization.props.website",
    "model": "a.website",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "address",
    "label": "organization.props.address",
    "model": "a.address",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Reception.CallLog": {
  "preRequisite": [
   "types",
   "purposes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "purpose",
    "label": "reception.call_log.purpose.purpose",
    "model": "l.purpose",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "purposes"
   },
   {
    "type": "input",
    "name": "name",
    "label": "reception.call_log.props.name",
    "model": "l.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "call_at",
    "label": "reception.call_log.props.call_at",
    "model": "l.callAt",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "duration",
    "label": "reception.call_log.props.duration",
    "model": "l.duration",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "incoming_number",
    "label": "reception.call_log.props.incoming_number",
    "model": "l.incomingNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "outgoing_number",
    "label": "reception.call_log.props.outgoing_number",
    "model": "l.outgoingNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "conversation",
    "label": "reception.call_log.props.conversation",
    "model": "l.conversation",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "reception.call_log.props.remarks",
    "model": "l.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Reception.Complaint": {
  "preRequisite": [
   "students",
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "code_number",
    "label": "reception.complaint.props.code_number",
    "model": "n.codeNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "student",
    "label": "global.select",
    "labelAttr": "student.student",
    "model": "u.selectedStudent",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/students/summary",
    "displayFormat": "{name} - {codeNumber} ({contactNumber})",
    "optionsKey": "students",
    "searchAction": "student/summary"
   },
   {
    "type": "select",
    "name": "type",
    "label": "reception.complaint.props.type",
    "model": "n.type",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "input",
    "name": "subject",
    "label": "reception.complaint.props.subject",
    "model": "n.subject",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "date",
    "label": "reception.complaint.props.date",
    "model": "n.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "complainant_name",
    "label": "reception.complaint.props.name",
    "model": "n.complainantName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "complainant_contact_number",
    "label": "reception.complaint.props.contact_number",
    "model": "n.complainantContactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "complainant_address",
    "label": "reception.complaint.props.address",
    "model": "n.complainantAddress",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "reception.complaint.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Reception.Correspondence": {
  "preRequisite": [
   "types",
   "modes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "date",
    "name": "date",
    "label": "reception.correspondence.props.date",
    "model": "o.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "letter_number",
    "label": "reception.correspondence.props.letter_number",
    "model": "o.letterNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "mode",
    "label": "reception.correspondence.props.mode",
    "model": "o.mode",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "modes"
   },
   {
    "type": "select-search",
    "name": "reference",
    "label": "global.select",
    "labelAttr": "reception.correspondence.props.reference",
    "model": "o.reference",
    "valueProp": "uuid",
    "searchAction": "reception/correspondence/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/reception/correspondences"
   },
   {
    "type": "input",
    "name": "sender_title",
    "label": "reception.correspondence.props.sender_title",
    "model": "o.senderTitle",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "sender_address",
    "label": "reception.correspondence.props.sender_address",
    "model": "o.senderAddress",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "receiver_title",
    "label": "reception.correspondence.props.receiver_title",
    "model": "o.receiverTitle",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "receiver_address",
    "label": "reception.correspondence.props.receiver_address",
    "model": "o.receiverAddress",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "reception.correspondence.props.remarks",
    "model": "o.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Reception.Enquiry": {
  "preRequisite": [
   "natures",
   "stages",
   "types",
   "sources",
   "genders",
   "periods",
   "bloodGroups",
   "religions",
   "maritalStatuses",
   "localities",
   "castes",
   "categories",
   "customFields"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "stage",
    "label": "reception.enquiry.props.stage",
    "model": "n.stage",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "nature==admission",
    "optionsKey": "stages"
   },
   {
    "type": "select",
    "name": "period",
    "label": "global.select",
    "labelAttr": "academic.period.period",
    "model": "n.period",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "nature==admission",
    "optionsKey": "periods"
   },
   {
    "type": "date",
    "name": "date",
    "label": "reception.enquiry.props.date",
    "model": "n.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "select",
    "name": "type",
    "label": "reception.enquiry.props.type",
    "model": "n.type",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "select",
    "name": "source",
    "label": "reception.enquiry.props.source",
    "model": "n.source",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "sources"
   },
   {
    "type": "input",
    "name": "name",
    "label": "reception.enquiry.props.name",
    "model": "n.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "contact_number",
    "label": "reception.enquiry.props.contact_number",
    "model": "n.contactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "radio-group",
    "name": "gender",
    "model": "n.gender",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "genders"
   },
   {
    "type": "date",
    "name": "birth_date",
    "label": "contact.props.birth_date",
    "model": "n.birthDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "select-search",
    "name": "course",
    "label": "global.select",
    "labelAttr": "academic.course.course",
    "model": "n.course",
    "valueProp": "uuid",
    "searchAction": "academic/course/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/academic/courses",
    "displayFormat": "{division.name} - {name}"
   },
   {
    "type": "date",
    "name": "anniversary_date",
    "label": "contact.props.anniversary_date",
    "model": "n.anniversaryDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "unique_id_number1",
    "model": "n.uniqueIdNumber1",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "unique_id_number2",
    "model": "n.uniqueIdNumber2",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "unique_id_number3",
    "model": "n.uniqueIdNumber3",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "unique_id_number4",
    "model": "n.uniqueIdNumber4",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "unique_id_number5",
    "model": "n.uniqueIdNumber5",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "birth_place",
    "label": "contact.props.birth_place",
    "model": "n.birthPlace",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "nationality",
    "label": "contact.props.nationality",
    "model": "n.nationality",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "mother_tongue",
    "label": "contact.props.mother_tongue",
    "model": "n.motherTongue",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "blood_group",
    "label": "contact.props.blood_group",
    "model": "n.bloodGroup",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "bloodGroups"
   },
   {
    "type": "select",
    "name": "locality",
    "label": "contact.props.locality",
    "model": "n.locality",
    "labelProp": "label",
    "valueProp": "value",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "localities"
   },
   {
    "type": "select",
    "name": "marital_status",
    "label": "contact.props.marital_status",
    "model": "n.maritalStatus",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "maritalStatuses"
   },
   {
    "type": "select",
    "name": "religion",
    "label": "global.select",
    "labelAttr": "contact.religion.religion",
    "model": "n.religion",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "religions"
   },
   {
    "type": "select",
    "name": "caste",
    "label": "contact.caste.caste",
    "model": "n.caste",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "castes"
   },
   {
    "type": "select",
    "name": "category",
    "label": "contact.category.category",
    "model": "n.category",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "categories"
   },
   {
    "type": "input",
    "name": "email",
    "label": "reception.enquiry.props.email",
    "model": "n.email",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select-search",
    "name": "employee",
    "label": "reception.enquiry.props.assigned_to",
    "model": "n.employee",
    "valueProp": "uuid",
    "searchAction": "employee/summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/summary"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "reception.enquiry.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "reception.enquiry.props.remarks",
    "model": "n.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Reception.GatePass": {
  "preRequisite": [
   "to",
   "purposes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "to",
    "label": "reception.gate_pass.props.to",
    "model": "s.to",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "value==student",
    "optionsKey": "to"
   },
   {
    "type": "select-search",
    "name": "requesters",
    "label": "student.student",
    "model": "s.requesters",
    "valueProp": "uuid",
    "searchAction": "student/summary",
    "inputType": "all",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "to==employee",
    "endpoint": "/app/students/summary",
    "whenAny": [
     "to==employee",
     "to==student"
    ]
   },
   {
    "type": "select",
    "name": "purpose",
    "label": "reception.gate_pass.props.purpose",
    "model": "s.purpose",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "purposes"
   },
   {
    "type": "date",
    "name": "start_at",
    "label": "reception.gate_pass.props.datetime",
    "model": "s.startAt",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "reason",
    "label": "reception.gate_pass.props.reason",
    "model": "s.reason",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "reception.gate_pass.props.remarks",
    "model": "s.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Reception.VisitorLog": {
  "preRequisite": [
   "types",
   "purposes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "purpose",
    "label": "reception.visitor_log.props.purpose",
    "model": "t.purpose",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "purposes"
   },
   {
    "type": "date",
    "name": "entry_at",
    "label": "reception.visitor_log.props.entry_at",
    "model": "t.entryAt",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "exit_at",
    "label": "reception.visitor_log.props.exit_at",
    "model": "t.exitAt",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "count",
    "label": "reception.visitor_log.props.count",
    "model": "t.count",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "type",
    "label": "reception.visitor_log.props.type",
    "model": "t.type",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "input",
    "name": "name",
    "label": "reception.visitor_log.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==other"
   },
   {
    "type": "input",
    "name": "company_name",
    "label": "reception.visitor_log.props.company_name",
    "model": "t.companyName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==other"
   },
   {
    "type": "input",
    "name": "contact_number",
    "label": "reception.visitor_log.props.contact_number",
    "model": "t.contactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select-search",
    "name": "visitor",
    "label": "student.student",
    "model": "t.visitor",
    "valueProp": "uuid",
    "searchAction": "student/summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==employee",
    "endpoint": "/app/students/summary",
    "whenAny": [
     "type==employee",
     "type==guardian"
    ]
   },
   {
    "type": "select-search",
    "name": "employee",
    "label": "reception.visitor_log.props.whom_to_meet",
    "model": "t.employee",
    "valueProp": "uuid",
    "searchAction": "employee/summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/summary"
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "reception.visitor_log.props.remarks",
    "model": "t.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Recruitment.Application": {
  "preRequisite": [
   "genders",
   "categories",
   "castes",
   "religions",
   "maritalStatuses",
   "bloodGroups",
   "designations"
  ],
  "fieldsets": [
   {
    "legend": "contact.props.present_address",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "address-input",
      "name": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   },
   {
    "legend": "contact.props.permanent_address",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "switch",
      "name": "same_as_present_address",
      "label": "contact.props.same_as_present_address",
      "model": "a.permanentAddress.sameAsPresentAddress",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "address-input",
      "name": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "radio-group",
    "name": "gender",
    "model": "a.gender",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "genders"
   },
   {
    "type": "date",
    "name": "birth_date",
    "label": "contact.props.birth_date",
    "model": "a.birthDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "father_name",
    "label": "contact.props.father_name",
    "model": "a.fatherName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "mother_name",
    "label": "contact.props.mother_name",
    "model": "a.motherName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "designation",
    "label": "global.select",
    "labelAttr": "employee.designation.designation",
    "model": "a.designation",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "designations"
   },
   {
    "type": "input",
    "name": "contact_number",
    "label": "contact.props.contact_number",
    "model": "a.contactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "email",
    "label": "contact.props.email",
    "model": "a.email",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "application_date",
    "label": "recruitment.application.props.application_date",
    "model": "a.applicationDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "availability_date",
    "label": "recruitment.application.props.availability_date",
    "model": "a.availabilityDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "qualification_summary",
    "label": "recruitment.application.props.qualification_summary",
    "model": "a.qualificationSummary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "blood_group",
    "label": "contact.props.blood_group",
    "model": "a.bloodGroup",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "bloodGroups"
   },
   {
    "type": "select",
    "name": "marital_status",
    "label": "contact.props.marital_status",
    "model": "a.maritalStatus",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "maritalStatuses"
   },
   {
    "type": "select",
    "name": "category",
    "label": "contact.props.category",
    "model": "a.category",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "categories"
   },
   {
    "type": "select",
    "name": "caste",
    "label": "contact.props.caste",
    "model": "a.caste",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "castes"
   },
   {
    "type": "input",
    "name": "alternate_contact_number",
    "label": "global.alternate",
    "labelAttr": "contact.props.contact_number",
    "model": "a.alternateRecords.contactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alternate_email",
    "label": "global.alternate",
    "labelAttr": "contact.props.email",
    "model": "a.alternateRecords.email",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Recruitment.Vacancy": {
  "preRequisite": [
   "designations",
   "employmentTypes"
  ],
  "fieldsets": [
   {
    "legend": null,
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select",
      "name": "employment_type",
      "rowKey": "records",
      "label": "global.select",
      "labelAttr": "employee.employment_type.employment_type",
      "model": "e.employmentType",
      "labelProp": "name",
      "valueProp": "uuid",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "employmentTypes"
     },
     {
      "type": "select",
      "name": "designation",
      "rowKey": "records",
      "label": "global.select",
      "labelAttr": "employee.designation.designation",
      "model": "e.designation",
      "labelProp": "name",
      "valueProp": "uuid",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "designations"
     },
     {
      "type": "input",
      "name": "number_of_positions",
      "rowKey": "records",
      "label": "recruitment.vacancy.props.number_of_positions",
      "model": "e.numberOfPositions",
      "inputType": "number",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "title",
    "label": "recruitment.vacancy.props.title",
    "model": "o.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "last_application_date",
    "label": "recruitment.vacancy.props.last_application_date",
    "model": "o.lastApplicationDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   }
  ]
 },
 "Reminder.Reminder": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "title",
    "label": "reminder.props.title",
    "model": "r.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "date",
    "label": "reminder.props.date",
    "model": "r.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "notify_before",
    "label": "reminder.props.notify_before",
    "model": "r.notifyBefore",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select-search",
    "name": "users",
    "label": "reminder.props.users",
    "model": "r.users",
    "valueProp": "uuid",
    "searchAction": "employee/summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/summary"
   },
   {
    "type": "textarea",
    "name": "note",
    "label": "reminder.props.note",
    "model": "r.note",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Resource.Assignment": {
  "preRequisite": [
   "subjects",
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "title",
    "label": "resource.assignment.props.title",
    "model": "t.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "type",
    "label": "resource.assignment.props.type",
    "model": "t.type",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "select-search",
    "name": "batches",
    "label": "academic.batch.batch",
    "model": "t.batches",
    "valueProp": "uuid",
    "searchAction": "academic/batch/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/academic/batches"
   },
   {
    "type": "select",
    "name": "subject",
    "label": "academic.subject.subject",
    "model": "t.subject",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "subjects"
   },
   {
    "type": "date",
    "name": "date",
    "label": "resource.assignment.props.date",
    "model": "t.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "due_date",
    "label": "resource.assignment.props.due_date",
    "model": "t.dueDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "switch",
    "name": "enable_marking",
    "label": "resource.assignment.props.enable_marking",
    "model": "t.enableMarking",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "max_mark",
    "label": "resource.assignment.props.max_mark",
    "model": "t.maxMark",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Resource.Diary": {
  "preRequisite": [
   "subjects",
   "statuses",
   "audienceTypes"
  ],
  "fieldsets": [
   {
    "legend": null,
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "heading",
      "rowKey": "details",
      "label": "resource.diary.props.heading",
      "model": "e.heading",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "textarea",
      "name": "description",
      "rowKey": "details",
      "label": "resource.diary.props.description",
      "model": "e.description",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "date",
    "name": "date",
    "label": "resource.diary.props.date",
    "model": "s.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "select-search",
    "name": "batches",
    "label": "academic.batch.batch",
    "model": "s.batches",
    "valueProp": "uuid",
    "searchAction": "academic/batch/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "audience_type==batch_wise",
    "endpoint": "/app/academic/batches"
   },
   {
    "type": "select",
    "name": "subject",
    "label": "academic.subject.subject",
    "model": "s.subject",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "subjects"
   },
   {
    "type": "select-search",
    "name": "students",
    "label": "student.student",
    "model": "s.students",
    "valueProp": "uuid",
    "searchAction": "student/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "audience_type==student_wise",
    "endpoint": "/app/students"
   }
  ]
 },
 "Resource.Download": {
  "preRequisite": [
   "studentAudienceTypes",
   "employeeAudienceTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "title",
    "label": "resource.download.props.title",
    "model": "t.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "expires_at",
    "label": "resource.download.props.expires_at",
    "model": "t.expiresAt",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_public",
    "label": "calendar.event.props.is_public",
    "model": "t.isPublic",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "resource.download.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Resource.LearningMaterial": {
  "preRequisite": [
   "subjects",
   "audienceTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "title",
    "label": "resource.learning_material.props.title",
    "model": "s.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select-search",
    "name": "batches",
    "label": "academic.batch.batch",
    "model": "s.batches",
    "valueProp": "uuid",
    "searchAction": "academic/batch/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "audience_type==batch_wise",
    "endpoint": "/app/academic/batches"
   },
   {
    "type": "select",
    "name": "subject",
    "label": "academic.subject.subject",
    "model": "s.subject",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "subjects"
   },
   {
    "type": "select-search",
    "name": "students",
    "label": "student.student",
    "model": "s.students",
    "valueProp": "uuid",
    "searchAction": "student/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "audience_type==student_wise",
    "endpoint": "/app/students"
   }
  ]
 },
 "Resource.LessonPlan": {
  "preRequisite": [
   "subjects",
   "statuses"
  ],
  "fieldsets": [
   {
    "legend": null,
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "heading",
      "rowKey": "details",
      "label": "resource.lesson_plan.props.heading",
      "model": "e.heading",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "textarea",
      "name": "description",
      "rowKey": "details",
      "label": "resource.lesson_plan.props.description",
      "model": "e.description",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "select-search",
    "name": "batches",
    "label": "academic.batch.batch",
    "model": "a.batches",
    "valueProp": "uuid",
    "searchAction": "academic/batch/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/academic/batches"
   },
   {
    "type": "select",
    "name": "subject",
    "label": "academic.subject.subject",
    "model": "a.subject",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "subjects"
   },
   {
    "type": "input",
    "name": "topic",
    "label": "resource.lesson_plan.props.topic",
    "model": "a.topic",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "resource.lesson_plan.props.start_date",
    "model": "a.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "resource.lesson_plan.props.end_date",
    "model": "a.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   }
  ]
 },
 "Resource.OnlineClass": {
  "preRequisite": [
   "subjects",
   "platforms"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "topic",
    "label": "resource.online_class.props.topic",
    "model": "o.topic",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "subject",
    "label": "academic.subject.subject",
    "model": "o.subject",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "subjects"
   },
   {
    "type": "date",
    "name": "start_at",
    "label": "resource.online_class.props.start_at",
    "model": "o.startAt",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "duration",
    "label": "resource.online_class.props.duration",
    "model": "o.duration",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "platform",
    "label": "resource.online_class.props.platform",
    "model": "o.platform",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "platforms"
   },
   {
    "type": "input",
    "name": "meeting_code",
    "label": "resource.online_class.props.meeting_code",
    "model": "o.meetingCode",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "url",
    "label": "resource.online_class.props.url",
    "model": "o.url",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "password",
    "label": "resource.online_class.props.password",
    "model": "o.password",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Resource.Syllabus": {
  "preRequisite": [
   "subjects",
   "statuses"
  ],
  "fieldsets": [
   {
    "legend": null,
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "unit_number",
      "rowKey": "units",
      "label": "resource.syllabus.props.unit_number",
      "model": "e.unitNumber",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "unit_name",
      "rowKey": "units",
      "label": "resource.syllabus.props.unit_name",
      "model": "e.unitName",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "date",
      "name": "start_date",
      "rowKey": "units",
      "label": "resource.syllabus.props.start_date",
      "model": "e.startDate",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": true,
      "when": null
     },
     {
      "type": "date",
      "name": "end_date",
      "rowKey": "units",
      "label": "resource.syllabus.props.end_date",
      "model": "e.endDate",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": true,
      "when": null
     },
     {
      "type": "date",
      "name": "completion_date",
      "rowKey": "units",
      "label": "resource.syllabus.props.completion_date",
      "model": "e.completionDate",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": true,
      "when": null
     },
     {
      "type": "textarea",
      "name": "description",
      "rowKey": "units",
      "label": "resource.syllabus.props.description",
      "model": "e.description",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "select-search",
    "name": "batches",
    "label": "academic.batch.batch",
    "model": "n.batches",
    "valueProp": "uuid",
    "searchAction": "academic/batch/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/academic/batches"
   },
   {
    "type": "select",
    "name": "subject",
    "label": "academic.subject.subject",
    "model": "n.subject",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "subjects"
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "resource.syllabus.props.remarks",
    "model": "n.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Site.Block": {
  "preRequisite": [
   "menus",
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "model": "l.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==testimonial",
    "whenAny": [
     "type==testimonial"
    ],
    "rowKey": "items"
   },
   {
    "type": "select",
    "name": "type",
    "model": "l.type",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "input",
    "name": "title",
    "model": "l.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "sub_title",
    "model": "l.subTitle",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "menu",
    "model": "l.menu",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "menus"
   },
   {
    "type": "input",
    "name": "url",
    "model": "l.url",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_flipped_animation",
    "model": "l.hasFlippedAnimation",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "background_color",
    "model": "l.backgroundColor",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "text_color",
    "model": "l.textColor",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "heading",
    "rowKey": "items",
    "model": "t.heading",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "whenAny": [
     "type==accordion"
    ]
   },
   {
    "type": "textarea",
    "name": "description",
    "rowKey": "items",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "max_items_per_row",
    "model": "l.maxItemsPerRow",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==stat_counter"
   },
   {
    "type": "textarea",
    "name": "count",
    "rowKey": "items",
    "model": "t.count",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "detail",
    "rowKey": "items",
    "model": "t.detail",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "comment",
    "rowKey": "items",
    "model": "t.comment",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Site.Menu": {
  "preRequisite": [
   "placements",
   "pages"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "site.menu.props.name",
    "model": "n.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "external_url",
    "label": "site.menu.props.external_url",
    "model": "n.externalUrl",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "page",
    "label": "global.select",
    "labelAttr": "site.page.page",
    "model": "n.page",
    "labelProp": "title",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "pages"
   },
   {
    "type": "select",
    "name": "placement",
    "label": "global.select",
    "labelAttr": "site.menu.props.placement",
    "model": "n.placement",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "placements"
   },
   {
    "type": "select-search",
    "name": "parent",
    "label": "global.select",
    "labelAttr": "site.menu.props.parent",
    "model": "n.parent",
    "searchAction": "site/menu/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "placement==header",
    "endpoint": "/app/site/menus"
   }
  ]
 },
 "Site.Page": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "model": "a.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "title",
    "model": "a.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "sub_title",
    "model": "a.subTitle",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "editor",
    "name": "content",
    "label": null,
    "labelAttr": null,
    "when": null,
    "inputType": null,
    "required": true,
    "rowKey": null
   }
  ]
 },
 "Student.Account": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "finance.account.props.name",
    "model": "o.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "finance.account.props.alias",
    "model": "o.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number",
    "label": "finance.account.props.number",
    "model": "o.number",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_name",
    "label": "finance.account.props.bank_name",
    "model": "o.bankName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "branch_name",
    "label": "finance.account.props.branch_name",
    "model": "o.branchName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_code1",
    "model": "o.bankCode1",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_code2",
    "model": "o.bankCode2",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_code3",
    "model": "o.bankCode3",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.Accounts": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "student",
    "label": "global.select",
    "labelAttr": "student.student",
    "model": "t.student",
    "valueProp": "uuid",
    "searchAction": "student/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/students"
   },
   {
    "type": "input",
    "name": "name",
    "label": "finance.account.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alias",
    "label": "finance.account.props.alias",
    "model": "t.alias",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number",
    "label": "finance.account.props.number",
    "model": "t.number",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_name",
    "label": "finance.account.props.bank_name",
    "model": "t.bankName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "branch_name",
    "label": "finance.account.props.branch_name",
    "model": "t.branchName",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_code1",
    "model": "t.bankCode1",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_code2",
    "model": "t.bankCode2",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "bank_code3",
    "model": "t.bankCode3",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.ConfigAttendanceType": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "student.attendance_type.props.name",
    "model": "o.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "code",
    "label": "student.attendance_type.props.code",
    "model": "o.code",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "sub_type",
    "label": "student.attendance_type.props.sub_type",
    "model": "o.subType",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "subTypes"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "student.attendance_type.props.description",
    "model": "o.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.ConfigDocumentType": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "student.document_type.props.name",
    "model": "o.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_number",
    "label": "global.has_attribute",
    "labelAttr": "employee.document_type.props.number",
    "model": "o.hasNumber",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number_format",
    "label": "employee.document_type.props.number_format",
    "model": "o.numberFormat",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_expiry_date",
    "label": "global.has_attribute",
    "labelAttr": "student.document_type.props.expiry_date",
    "model": "o.hasExpiryDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alert_days_before_expiry",
    "label": "student.document_type.props.alert_days_before_expiry",
    "model": "o.alertDaysBeforeExpiry",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_document_required",
    "label": "global.required",
    "labelAttr": "employee.document.document",
    "model": "o.isDocumentRequired",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "student.document_type.props.description",
    "model": "o.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.CustomFee": {
  "preRequisite": [
   "feeHeads"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "fee_head",
    "label": "student.fee.custom_fee",
    "model": "s.feeHead",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "feeHeads"
   },
   {
    "type": "input",
    "name": "amount",
    "label": "student.fee.props.amount",
    "model": "s.amount",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "due_date",
    "label": "student.fee.props.due_date",
    "model": "s.dueDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "student.fee.props.remarks",
    "model": "s.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.Dialogue": {
  "preRequisite": [
   "categories"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "category",
    "label": "student.dialogue_category.dialogue_category",
    "model": "t.category",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "categories"
   },
   {
    "type": "date",
    "name": "date",
    "label": "student.dialogue.props.date",
    "model": "t.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "title",
    "label": "student.dialogue.props.title",
    "model": "t.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "student.dialogue.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.Document": {
  "preRequisite": [
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "type",
    "label": "student.document_type.document_type",
    "model": "d.selectedType",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "input",
    "name": "title",
    "label": "student.document.props.title",
    "model": "s.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number",
    "label": "student.document.props.number",
    "model": "s.number",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "issue_date",
    "label": "student.document.props.issue_date",
    "model": "s.issueDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "student.document.props.start_date",
    "model": "s.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "student.document.props.end_date",
    "model": "s.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_submitted_original",
    "label": "student.document.props.is_submitted_original",
    "model": "s.isSubmittedOriginal",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "student.document.props.description",
    "model": "s.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.Documents": {
  "preRequisite": [
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "student",
    "label": "global.select",
    "labelAttr": "student.student",
    "model": "n.student",
    "valueProp": "uuid",
    "searchAction": "student/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/students"
   },
   {
    "type": "select",
    "name": "type",
    "label": "global.select",
    "labelAttr": "student.document_type.document_type",
    "model": "u.selectedType",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "input",
    "name": "title",
    "label": "student.document.props.title",
    "model": "n.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number",
    "label": "student.document.props.number",
    "model": "n.number",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "issue_date",
    "label": "student.document.props.issue_date",
    "model": "n.issueDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "student.document.props.start_date",
    "model": "n.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "student.document.props.end_date",
    "model": "n.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_submitted_original",
    "label": "student.document.props.is_submitted_original",
    "model": "n.isSubmittedOriginal",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "student.document.props.description",
    "model": "n.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.FeeRefund": {
  "preRequisite": [
   "feeHeads",
   "ledgers",
   "paymentMethods"
  ],
  "fieldsets": [
   {
    "legend": null,
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select",
      "name": "head",
      "rowKey": "records",
      "label": "finance.fee_head.fee_head",
      "model": "e.head",
      "labelProp": "name",
      "valueProp": "uuid",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "amount",
      "rowKey": "records",
      "label": "student.fee_refund.props.amount",
      "model": "e.amount",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "date",
    "name": "date",
    "label": "student.fee_refund.props.date",
    "model": "n.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "ledger",
    "label": "finance.ledger.ledger",
    "model": "n.ledger",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "ledgers"
   },
   {
    "type": "select",
    "name": "payment_method",
    "label": "finance.payment_method.payment_method",
    "model": "b.selectedPaymentMethod",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "paymentMethods"
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "student.payment.props.remarks",
    "model": "n.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.Guardian": {
  "preRequisite": [
   "relations",
   "guardianTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "radio-group",
    "name": "type",
    "model": "t.type",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "guardianTypes"
   },
   {
    "type": "select-search",
    "name": "guardian",
    "label": "global.select",
    "labelAttr": "guardian.guardian",
    "model": "t.guardian",
    "valueProp": "uuid",
    "searchAction": "guardian/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==existing",
    "endpoint": "/app/guardians",
    "displayFormat": "{name} ({contactNumber})"
   },
   {
    "type": "input",
    "name": "name",
    "label": "contact.props.name",
    "model": "t.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==new"
   },
   {
    "type": "input",
    "name": "contact_number",
    "label": "contact.props.contact_number",
    "model": "t.contactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "type==new"
   },
   {
    "type": "select",
    "name": "relation",
    "label": "contact.props.relation",
    "model": "t.relation",
    "labelProp": "label",
    "valueProp": "value",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "relations"
   },
   {
    "type": "switch",
    "name": "create_user_account",
    "label": "global.create",
    "labelAttr": "contact.user_account",
    "model": "t.createUserAccount",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "email",
    "label": "contact.login.props.email",
    "model": "t.email",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "username",
    "label": "contact.login.props.username",
    "model": "t.username",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "password",
    "label": "contact.login.props.password",
    "model": "t.password",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "password_confirmation",
    "label": "contact.login.props.password_confirmation",
    "model": "t.passwordConfirmation",
    "inputType": "password",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.LeaveRequest": {
  "preRequisite": [
   "students",
   "categories"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "student",
    "label": "global.select",
    "labelAttr": "student.student",
    "model": "u.selectedStudent",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/students/summary",
    "optionsKey": "categories",
    "searchAction": "student/summary",
    "labelProp": "name"
   },
   {
    "type": "date",
    "name": "date_between",
    "label": "general.date_between",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "reason",
    "label": "student.leave_request.props.reason",
    "model": "a.reason",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.EditRequest": {
  "preRequisite": [
   "genders",
   "bloodGroups",
   "religions",
   "categories",
   "castes",
   "maritalStatuses"
  ],
  "fieldsets": [
   {
    "legend": "student.props.parent",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "father_contact_number",
      "label": "contact.props.contact_number",
      "model": "n.fatherContactNumber",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "father_email",
      "label": "contact.props.email",
      "model": "n.fatherEmail",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "date",
      "name": "father_birth_date",
      "label": "contact.props.birth_date",
      "model": "n.fatherBirthDate",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "father_occupation",
      "label": "contact.props.occupation",
      "model": "n.fatherOccupation",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "father_annual_income",
      "label": "contact.props.annual_income",
      "model": "n.fatherAnnualIncome",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "mother_contact_number",
      "label": "contact.props.contact_number",
      "model": "n.motherContactNumber",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "mother_email",
      "label": "contact.props.email",
      "model": "n.motherEmail",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "date",
      "name": "mother_birth_date",
      "label": "contact.props.birth_date",
      "model": "n.motherBirthDate",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "mother_occupation",
      "label": "contact.props.occupation",
      "model": "n.motherOccupation",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "mother_annual_income",
      "label": "contact.props.annual_income",
      "model": "n.motherAnnualIncome",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   },
   {
    "legend": "contact.props.present_address",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "address-input",
      "name": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   },
   {
    "legend": "contact.props.permanent_address",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "switch",
      "name": "same_as_present_address",
      "label": "contact.props.same_as_present_address",
      "model": "n.permanentAddress.sameAsPresentAddress",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "address-input",
      "name": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   },
   {
    "legend": "contact.props.emergency_contact",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "emergency_contact.name",
      "label": "contact.props.emergency_contact_name",
      "model": "n.emergencyContact.name",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "emergency_contact.contact_number",
      "label": "contact.props.emergency_contact_number",
      "model": "n.emergencyContact.contactNumber",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "select",
      "name": "emergency_contact.relation",
      "label": "contact.props.relation",
      "model": "n.emergencyContact.relation",
      "labelProp": "label",
      "valueProp": "value",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "contact_number",
    "label": "contact.props.primary_contact_number",
    "model": "n.contactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alternate_contact_number",
    "label": "contact.props.alternate_contact_number",
    "model": "n.alternateContactNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "email",
    "label": "contact.props.email",
    "model": "n.email",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "unique_id_number1",
    "model": "n.uniqueIdNumber1",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "unique_id_number2",
    "model": "n.uniqueIdNumber2",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "unique_id_number3",
    "model": "n.uniqueIdNumber3",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "unique_id_number4",
    "model": "n.uniqueIdNumber4",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "unique_id_number5",
    "model": "n.uniqueIdNumber5",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "birth_place",
    "label": "contact.props.birth_place",
    "model": "n.birthPlace",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "nationality",
    "label": "contact.props.nationality",
    "model": "n.nationality",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "mother_tongue",
    "label": "contact.props.mother_tongue",
    "model": "n.motherTongue",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "blood_group",
    "label": "contact.props.blood_group",
    "model": "n.bloodGroup",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "bloodGroups"
   },
   {
    "type": "select",
    "name": "religion",
    "label": "global.select",
    "labelAttr": "contact.religion.religion",
    "model": "n.religion",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "religions"
   },
   {
    "type": "select",
    "name": "category",
    "label": "global.select",
    "labelAttr": "contact.category.category",
    "model": "n.category",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "caste",
    "label": "global.select",
    "labelAttr": "contact.caste.caste",
    "model": "n.caste",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "castes"
   }
  ]
 },
 "Student.Qualification": {
  "preRequisite": [
   "levels",
   "results"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "level",
    "label": "student.qualification_level.qualification_level",
    "model": "s.level",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "levels"
   },
   {
    "type": "input",
    "name": "course",
    "label": "student.qualification.props.course",
    "model": "s.course",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "session",
    "label": "student.qualification.props.session",
    "model": "s.session",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "autosuggest",
    "name": "institute",
    "label": "student.qualification.props.institute",
    "model": "s.institute",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "institute_address",
    "label": "student.qualification.props.institute_address",
    "model": "s.instituteAddress",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "autosuggest",
    "name": "affiliated_to",
    "label": "student.qualification.props.affiliated_to",
    "model": "s.affiliatedTo",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "student.qualification.props.start_date",
    "model": "s.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "student.qualification.props.end_date",
    "model": "s.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "result",
    "label": "student.qualification.props.result",
    "model": "s.result",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "results"
   },
   {
    "type": "input",
    "name": "total_marks",
    "label": "student.qualification.props.total_marks",
    "model": "s.totalMarks",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "result==pass"
   },
   {
    "type": "input",
    "name": "obtained_marks",
    "label": "student.qualification.props.obtained_marks",
    "model": "s.obtainedMarks",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "result==pass"
   },
   {
    "type": "input",
    "name": "failed_subjects",
    "label": "student.qualification.props.failed_subjects",
    "model": "s.failedSubjects",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "result==reappear"
   },
   {
    "type": "switch",
    "name": "is_submitted_original",
    "label": "student.qualification.props.is_submitted_original",
    "model": "s.isSubmittedOriginal",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.Qualifications": {
  "preRequisite": [
   "levels",
   "results"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "student",
    "label": "global.select",
    "labelAttr": "student.student",
    "model": "s.student",
    "valueProp": "uuid",
    "searchAction": "student/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/students"
   },
   {
    "type": "select",
    "name": "level",
    "label": "student.qualification_level.qualification_level",
    "model": "s.level",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "levels"
   },
   {
    "type": "input",
    "name": "course",
    "label": "student.qualification.props.course",
    "model": "s.course",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "session",
    "label": "student.qualification.props.session",
    "model": "s.session",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "autosuggest",
    "name": "institute",
    "label": "student.qualification.props.institute",
    "model": "s.institute",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "institute_address",
    "label": "student.qualification.props.institute_address",
    "model": "s.instituteAddress",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "autosuggest",
    "name": "affiliated_to",
    "label": "student.qualification.props.affiliated_to",
    "model": "s.affiliatedTo",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "student.qualification.props.start_date",
    "model": "s.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "student.qualification.props.end_date",
    "model": "s.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "result",
    "label": "student.qualification.props.result",
    "model": "s.result",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "results"
   },
   {
    "type": "input",
    "name": "total_marks",
    "label": "student.qualification.props.total_marks",
    "model": "s.totalMarks",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "result==pass"
   },
   {
    "type": "input",
    "name": "obtained_marks",
    "label": "student.qualification.props.obtained_marks",
    "model": "s.obtainedMarks",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "result==pass"
   },
   {
    "type": "input",
    "name": "failed_subjects",
    "label": "student.qualification.props.failed_subjects",
    "model": "s.failedSubjects",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "result==reappear"
   },
   {
    "type": "switch",
    "name": "is_submitted_original",
    "label": "student.qualification.props.is_submitted_original",
    "model": "s.isSubmittedOriginal",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.Registration": {
  "preRequisite": [
   "genders",
   "studentTypes",
   "enrollmentTypes",
   "guardianTypes",
   "relations",
   "periods",
   "customFields"
  ],
  "fieldsets": [
   {
    "legend": "student.registration.registration",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select",
      "name": "period",
      "label": "global.select",
      "labelAttr": "academic.period.period",
      "model": "a.period",
      "labelProp": "name",
      "valueProp": "uuid",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "periods"
     },
     {
      "type": "select-search",
      "name": "course",
      "label": "global.select",
      "labelAttr": "academic.course.course",
      "model": "U.selectedCourse",
      "valueProp": "uuid",
      "searchAction": "academic/course/list",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "endpoint": "/app/academic/courses",
      "displayFormat": "{division.name} - {name}"
     },
     {
      "type": "info",
      "name": null,
      "label": "academic.course.registration_fee_info",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "select",
      "name": "enrollment_type",
      "label": "global.select",
      "labelAttr": "student.enrollment_type.enrollment_type",
      "model": "a.enrollmentType",
      "labelProp": "name",
      "valueProp": "uuid",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "enrollmentTypes"
     },
     {
      "type": "date",
      "name": "date",
      "label": "student.registration.props.date",
      "model": "a.date",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": true,
      "when": null
     },
     {
      "type": "input",
      "name": "registration_fee",
      "label": "student.registration.fee",
      "model": "a.registrationFee",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "mode==edit"
     },
     {
      "type": "date",
      "name": "payment_due_date",
      "label": "student.registration.props.payment_due_date",
      "model": "a.paymentDueDate",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": true,
      "when": "mode==edit"
     }
    ]
   },
   {
    "legend": "student.student",
    "when": "mode==create",
    "repeat": null,
    "fields": [
     {
      "type": "radio-group",
      "name": "student_type",
      "model": "a.studentType",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "mode==create",
      "optionsKey": "studentTypes"
     },
     {
      "type": "select-search",
      "name": "student",
      "label": "global.select",
      "labelAttr": "student.student",
      "model": "a.student",
      "valueProp": "uuid",
      "searchAction": "student/summary",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "student_type==existing",
      "endpoint": "/app/students/summary",
      "displayFormat": "{name} - {codeNumber} ({contactNumber})"
     },
     {
      "type": "name-input",
      "name": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "student_type==new"
     },
     {
      "type": "radio-group",
      "name": "gender",
      "model": "a.gender",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "genders"
     },
     {
      "type": "date",
      "name": "birth_date",
      "label": "contact.props.birth_date",
      "model": "a.birthDate",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": true,
      "when": null
     },
     {
      "type": "input",
      "name": "contact_number",
      "label": "contact.props.contact_number",
      "model": "a.contactNumber",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   },
   {
    "legend": "guardian.guardian",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "radio-group",
      "name": "guardian_type",
      "rowKey": "guardians",
      "model": "e.guardianType",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "guardianTypes"
     },
     {
      "type": "select-search",
      "name": "guardian",
      "rowKey": "guardians",
      "label": "global.select",
      "labelAttr": "guardian.guardian",
      "model": "e.guardian",
      "valueProp": "uuid",
      "searchAction": "guardian/list",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "guardian_type==existing",
      "endpoint": "/app/guardians"
     },
     {
      "type": "input",
      "name": "name",
      "label": "guardian.props.name",
      "model": "e.name",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": "guardian_type==new",
      "rowKey": "guardians"
     },
     {
      "type": "input",
      "name": "contact_number",
      "label": "contact.props.contact_number",
      "model": "e.contactNumber",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "rowKey": "guardians"
     },
     {
      "type": "select",
      "name": "relation",
      "rowKey": "guardians",
      "label": "contact.props.relation",
      "model": "e.relation",
      "labelProp": "label",
      "valueProp": "value",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "relations"
     },
     {
      "type": "button",
      "name": null,
      "label": "global.add",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": []
 },
 "Student.ServiceRequest": {
  "preRequisite": [
   "students",
   "types",
   "requestTypes",
   "transportStoppages"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "student",
    "label": "global.select",
    "labelAttr": "student.student",
    "model": "v.selectedStudent",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/students/summary",
    "displayFormat": "{name} - {codeNumber} ({contactNumber})",
    "optionsKey": "students",
    "searchAction": "student/summary"
   },
   {
    "type": "date",
    "name": "date",
    "label": "student.service_request.props.date",
    "model": "s.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "select",
    "name": "transport_stoppage",
    "label": "transport.stoppage.stoppage",
    "model": "s.transportStoppage",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "request_type==opt_in",
    "optionsKey": "transportStoppages"
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "student.service_request.props.description",
    "model": "s.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.Timesheet": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "batch",
    "label": "global.select",
    "labelAttr": "student.student",
    "model": "s.student",
    "valueProp": "uuid",
    "searchAction": "student/list",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/students"
   },
   {
    "type": "date",
    "name": "date",
    "label": "student.timesheet.props.date",
    "model": "s.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "in_at",
    "label": "student.timesheet.props.in_at",
    "model": "s.inAt",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "out_at",
    "label": "student.timesheet.props.out_at",
    "model": "s.outAt",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "student.timesheet.props.remarks",
    "model": "s.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.Transfer": {
  "preRequisite": [
   "reasons",
   "actions",
   "periods",
   "courses"
  ],
  "fieldsets": [
   {
    "legend": "student.transfer.actions.transfer_within_team",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select",
      "name": "team",
      "label": "global.select",
      "labelAttr": "team.team",
      "model": "r.team",
      "labelProp": "name",
      "valueProp": "uuid",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "teams"
     },
     {
      "type": "select",
      "name": "period",
      "label": "global.select",
      "labelAttr": "academic.period.period",
      "model": "r.period",
      "labelProp": "name",
      "valueProp": "uuid",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "periods"
     },
     {
      "type": "select",
      "name": "course",
      "label": "global.select",
      "labelAttr": "academic.course.course",
      "model": "r.course",
      "labelProp": "name",
      "valueProp": "uuid",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "courses"
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "select-search",
    "name": "student",
    "label": "global.select",
    "labelAttr": "student.student",
    "model": "l.selectedStudent",
    "valueProp": "uuid",
    "searchAction": "student/summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/students/summary",
    "optionsKey": "reasons",
    "whenAny": [
     "mode==create"
    ],
    "labelProp": "name"
   },
   {
    "type": "date",
    "name": "date",
    "label": "student.transfer.props.date",
    "model": "r.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "transfer_certificate_number",
    "label": "student.transfer.props.certificate_number",
    "model": "r.transferCertificateNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "student.transfer.props.remarks",
    "model": "r.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Student.TransferRequest": {
  "preRequisite": [
   "students"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "student",
    "label": "global.select",
    "labelAttr": "student.student",
    "model": "s.selectedStudent",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "mode==create",
    "endpoint": "/app/students/summary",
    "displayFormat": "{name} - {codeNumber} ({contactNumber})",
    "optionsKey": "students",
    "whenAny": [
     "mode==create"
    ],
    "searchAction": "student/summary"
   },
   {
    "type": "date",
    "name": "request_date",
    "label": "student.transfer_request.props.request_date",
    "model": "o.requestDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "reason",
    "label": "student.transfer_request.props.reason",
    "model": "o.reason",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Task.Task": {
  "preRequisite": [
   "categories",
   "priorities",
   "lists",
   "customFields"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "title",
    "label": "task.props.title",
    "model": "o.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "category",
    "label": "global.select",
    "labelAttr": "task.category.category",
    "model": "o.category",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "categories"
   },
   {
    "type": "select",
    "name": "priority",
    "label": "global.select",
    "labelAttr": "task.priority.priority",
    "model": "o.priority",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "priorities"
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "task.props.start_date",
    "model": "o.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "due_date",
    "label": "task.props.due_date",
    "model": "o.dueDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "due_time",
    "label": "task.props.due_time",
    "model": "o.dueTime",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Team.Config.Role": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "team.config.role.props.name",
    "model": "n.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Transport.Circle": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "transport.circle.props.name",
    "model": "r.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "transport.circle.props.description",
    "model": "r.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Transport.Fee": {
  "preRequisite": [
   "circles"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "transport.fee.props.name",
    "model": "i.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "transport.fee.props.description",
    "model": "i.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "arrival_amount",
    "rowKey": "records",
    "label": "transport.fee.props.arrival_amount",
    "model": "e.arrivalAmount",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "departure_amount",
    "rowKey": "records",
    "label": "transport.fee.props.departure_amount",
    "model": "e.departureAmount",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "roundtrip_amount",
    "rowKey": "records",
    "label": "transport.fee.props.roundtrip_amount",
    "model": "e.roundtripAmount",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Transport.Route": {
  "preRequisite": [
   "stoppages",
   "vehicles",
   "directions"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "transport.route.props.name",
    "model": "r.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "vehicle",
    "label": "transport.vehicle.vehicle",
    "model": "r.vehicle",
    "labelProp": "nameWithRegistrationNumber",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "vehicles"
   },
   {
    "type": "input",
    "name": "max_capacity",
    "label": "transport.route.props.max_capacity",
    "model": "r.maxCapacity",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "direction",
    "label": "transport.route.props.direction",
    "model": "r.direction",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "directions"
   },
   {
    "type": "date",
    "name": "arrival_starts_at",
    "label": "transport.route.props.arrival_starts_at",
    "model": "r.arrivalStartsAt",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "direction==roundtrip"
   },
   {
    "type": "date",
    "name": "departure_starts_at",
    "label": "transport.route.props.departure_starts_at",
    "model": "r.departureStartsAt",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": "direction==roundtrip"
   },
   {
    "type": "select",
    "name": "stoppage",
    "rowKey": "stoppages",
    "label": "transport.stoppage.stoppage",
    "model": "e.stoppage",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "stoppages"
   },
   {
    "type": "input",
    "name": "arrival_time",
    "rowKey": "stoppages",
    "label": "transport.route.props.arrival_time",
    "model": "e.arrivalTime",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "duration_to_destination",
    "label": "transport.route.props.duration_to_destination",
    "model": "r.durationToDestination",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "transport.route.props.description",
    "model": "r.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Transport.Stoppage": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "transport.stoppage.props.name",
    "model": "o.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "transport.stoppage.props.description",
    "model": "o.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Transport.Vehicle": {
  "preRequisite": [
   "fuelTypes",
   "ownerships"
  ],
  "fieldsets": [
   {
    "legend": "transport.vehicle.owner_info",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "select",
      "name": "ownership",
      "label": "transport.vehicle.props.ownership",
      "model": "r.ownership",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null,
      "optionsKey": "ownerships"
     },
     {
      "type": "date",
      "name": "ownership_date",
      "label": "transport.vehicle.props.ownership_date",
      "model": "r.ownershipDate",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": true,
      "when": null
     },
     {
      "type": "input",
      "name": "owner_name",
      "label": "transport.vehicle.props.owner_name",
      "model": "r.ownerName",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "owner_phone",
      "label": "transport.vehicle.props.owner_phone",
      "model": "r.ownerPhone",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "input",
      "name": "owner_email",
      "label": "transport.vehicle.props.owner_email",
      "model": "r.ownerEmail",
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     },
     {
      "type": "textarea",
      "name": "owner_address",
      "label": "transport.vehicle.props.owner_address",
      "model": "r.ownerAddress",
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "when": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "transport.vehicle.props.name",
    "model": "r.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "registration_number",
    "label": "transport.vehicle.props.registration_number",
    "model": "r.registrationNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "registration_place",
    "label": "transport.vehicle.props.registration_place",
    "model": "r.registrationPlace",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "registration_date",
    "label": "transport.vehicle.props.registration_date",
    "model": "r.registrationDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "select",
    "name": "type",
    "label": "transport.vehicle.props.type",
    "model": "r.type",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "input",
    "name": "engine_number",
    "label": "transport.vehicle.props.engine_number",
    "model": "r.engineNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "chassis_number",
    "label": "transport.vehicle.props.chassis_number",
    "model": "r.chassisNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "cubic_capacity",
    "label": "transport.vehicle.props.cubic_capacity",
    "model": "r.cubicCapacity",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "color",
    "label": "transport.vehicle.props.color",
    "model": "r.color",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "model_number",
    "label": "transport.vehicle.props.model_number",
    "model": "r.modelNumber",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "make",
    "label": "transport.vehicle.props.make",
    "model": "r.make",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "class",
    "label": "transport.vehicle.props.class",
    "model": "r.class",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "seating_capacity",
    "label": "transport.vehicle.props.seating_capacity",
    "model": "r.seatingCapacity",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "max_seating_allowed",
    "label": "transport.vehicle.props.max_seating_allowed",
    "model": "r.maxSeatingAllowed",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "fuel_type",
    "label": "transport.vehicle.props.fuel_type",
    "model": "r.fuelType",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "fuelTypes"
   },
   {
    "type": "input",
    "name": "fuel_capacity",
    "label": "transport.vehicle.props.fuel_capacity",
    "model": "r.fuelCapacity",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Transport.VehicleCaseRecord": {
  "preRequisite": [
   "vehicles"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "vehicle",
    "label": "transport.vehicle.vehicle",
    "model": "t.vehicle",
    "labelProp": "nameWithRegistrationNumber",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "vehicles"
   },
   {
    "type": "select",
    "name": "type",
    "label": "transport.vehicle.case_record.props.type",
    "model": "t.type",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "input",
    "name": "title",
    "label": "transport.vehicle.case_record.props.title",
    "model": "t.title",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "date",
    "label": "transport.vehicle.case_record.props.date",
    "model": "t.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "penalty",
    "label": "transport.vehicle.case_record.props.penalty",
    "model": "t.penalty",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "location",
    "label": "transport.vehicle.case_record.props.location",
    "model": "t.location",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "transport.vehicle.case_record.props.description",
    "model": "t.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "action",
    "label": "transport.vehicle.case_record.props.action",
    "model": "t.action",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Transport.VehicleConfigDocumentType": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "transport.vehicle.document_type.props.name",
    "model": "o.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_number",
    "label": "global.has_attribute",
    "labelAttr": "employee.document_type.props.number",
    "model": "o.hasNumber",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number_format",
    "label": "employee.document_type.props.number_format",
    "model": "o.numberFormat",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_expiry_date",
    "label": "global.has_attribute",
    "labelAttr": "transport.vehicle.document_type.props.expiry_date",
    "model": "o.hasExpiryDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "alert_days_before_expiry",
    "label": "transport.vehicle.document_type.props.alert_days_before_expiry",
    "model": "o.alertDaysBeforeExpiry",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_document_required",
    "label": "global.required",
    "labelAttr": "employee.document.document",
    "model": "o.isDocumentRequired",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "transport.vehicle.document_type.props.description",
    "model": "o.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Transport.VehicleConfigExpenseType": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "transport.vehicle.expense_type.props.name",
    "model": "o.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_quantity",
    "label": "global.has_attribute",
    "labelAttr": "transport.vehicle.expense_type.props.quantity",
    "model": "o.hasQuantity",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "has_reminder",
    "label": "global.has_attribute",
    "labelAttr": "reminder.reminder",
    "model": "o.hasReminder",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "switch",
    "name": "is_document_required",
    "label": "global.required",
    "labelAttr": "transport.vehicle.expense_type.props.document",
    "model": "o.isDocumentRequired",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "transport.vehicle.expense_type.props.description",
    "model": "o.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Transport.VehicleDocument": {
  "preRequisite": [
   "vehicles",
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "vehicle",
    "label": "transport.vehicle.vehicle",
    "model": "s.vehicle",
    "labelProp": "nameWithRegistrationNumber",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "vehicles"
   },
   {
    "type": "select",
    "name": "type",
    "label": "transport.vehicle.document.props.type",
    "model": "i.selectedType",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "input",
    "name": "title",
    "label": "transport.vehicle.document.props.title",
    "model": "s.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "number",
    "label": "transport.vehicle.document.props.number",
    "model": "s.number",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "issue_date",
    "label": "transport.vehicle.document.props.issue_date",
    "model": "s.issueDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "transport.vehicle.document.props.start_date",
    "model": "s.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "transport.vehicle.document.props.end_date",
    "model": "s.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "description",
    "label": "transport.vehicle.document.props.description",
    "model": "s.description",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Transport.VehicleExpenseRecord": {
  "preRequisite": [
   "vehicles"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "vehicle",
    "label": "transport.vehicle.vehicle",
    "model": "t.vehicle",
    "labelProp": "nameWithRegistrationNumber",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "vehicles"
   },
   {
    "type": "date",
    "name": "date",
    "label": "transport.vehicle.expense_record.props.date",
    "model": "t.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "select",
    "name": "type",
    "label": "transport.vehicle.expense_record.props.type",
    "model": "p.selectedType",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "input",
    "name": "quantity",
    "label": "transport.vehicle.expense_record.props.quantity",
    "model": "t.quantity",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "autosuggest",
    "name": "inventory.unit",
    "label": "transport.vehicle.expense_record.props.unit",
    "model": "t.unit",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "price_per_unit",
    "label": "transport.vehicle.expense_record.props.price_per_unit",
    "model": "t.pricePerUnit",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "amount",
    "label": "transport.vehicle.expense_record.props.amount",
    "model": "t.amount",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "log",
    "label": "transport.vehicle.expense_record.props.log",
    "model": "t.log",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "transport.vehicle.expense_record.props.remarks",
    "model": "t.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Transport.VehicleFuelRecord": {
  "preRequisite": [
   "vehicles"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "vehicle",
    "label": "transport.vehicle.vehicle",
    "model": "o.vehicle",
    "labelProp": "nameWithRegistrationNumber",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "vehicles"
   },
   {
    "type": "date",
    "name": "date",
    "label": "transport.vehicle.fuel_record.props.date",
    "model": "o.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "quantity",
    "label": "transport.vehicle.fuel_record.props.quantity",
    "model": "o.quantity",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "price_per_unit",
    "label": "transport.vehicle.fuel_record.props.price_per_unit",
    "model": "o.pricePerUnit",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "previous_log",
    "label": "transport.vehicle.fuel_record.props.previous_log",
    "model": "o.previousLog",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "log",
    "label": "transport.vehicle.fuel_record.props.log",
    "model": "o.log",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "vendor",
    "label": "inventory.vendor.vendor",
    "model": "o.vendor",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "vendors"
   },
   {
    "type": "input",
    "name": "bill_number",
    "label": "transport.vehicle.fuel_record.props.bill_number",
    "model": "o.billNumber",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "transport.vehicle.fuel_record.props.remarks",
    "model": "o.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Transport.VehicleIncharge": {
  "preRequisite": [
   "vehicles",
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "vehicle",
    "label": "transport.vehicle.vehicle",
    "model": "a.vehicle",
    "labelProp": "nameWithRegistrationNumber",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "vehicles"
   },
   {
    "type": "select",
    "name": "type",
    "label": "transport.vehicle.incharge.type",
    "model": "a.type",
    "labelProp": "label",
    "valueProp": "value",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "types"
   },
   {
    "type": "select-search",
    "name": "employee",
    "label": "global.select",
    "labelAttr": "employee.employee",
    "model": "a.employee",
    "valueProp": "uuid",
    "searchAction": "employee/summary",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "endpoint": "/app/employees/summary"
   },
   {
    "type": "date",
    "name": "start_date",
    "label": "employee.incharge.props.start_date",
    "model": "a.startDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "end_date",
    "label": "employee.incharge.props.end_date",
    "model": "a.endDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "employee.incharge.props.remarks",
    "model": "a.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Transport.VehicleServiceRecord": {
  "preRequisite": [
   "vehicles"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "vehicle",
    "label": "transport.vehicle.vehicle",
    "model": "t.vehicle",
    "labelProp": "nameWithRegistrationNumber",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "vehicles"
   },
   {
    "type": "date",
    "name": "date",
    "label": "transport.vehicle.service_record.props.date",
    "model": "t.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "amount",
    "label": "transport.vehicle.service_record.props.amount",
    "model": "t.amount",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "log",
    "label": "transport.vehicle.service_record.props.log",
    "model": "t.log",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "next_due_date",
    "label": "transport.vehicle.service_record.props.next_due_date",
    "model": "t.nextDueDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "input",
    "name": "next_due_log",
    "label": "transport.vehicle.service_record.props.next_due_log",
    "model": "t.nextDueLog",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "transport.vehicle.service_record.props.remarks",
    "model": "t.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Transport.VehicleTripRecord": {
  "preRequisite": [
   "vehicles",
   "purposes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "vehicle",
    "label": "transport.vehicle.vehicle",
    "model": "o.vehicle",
    "labelProp": "nameWithRegistrationNumber",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "vehicles"
   },
   {
    "type": "select",
    "name": "purpose",
    "label": "transport.vehicle.trip_purpose.trip_purpose",
    "model": "o.purpose",
    "labelProp": "name",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "purposes"
   },
   {
    "type": "input",
    "name": "log",
    "label": "transport.vehicle.trip_record.props.log",
    "model": "o.log",
    "inputType": "number",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "date",
    "label": "transport.vehicle.trip_record.props.date",
    "model": "o.date",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "textarea",
    "name": "remarks",
    "label": "transport.vehicle.trip_record.props.remarks",
    "model": "o.remarks",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "User.User": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "label": "user.props.name",
    "model": "o.name",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "email",
    "label": "user.props.email",
    "model": "o.email",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "username",
    "label": "user.props.username",
    "model": "o.username",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "select",
    "name": "roles",
    "label": "team.config.role.role",
    "model": "o.roles",
    "labelProp": "label",
    "valueProp": "uuid",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null,
    "optionsKey": "roles"
   },
   {
    "type": "switch",
    "name": "force_change_password",
    "label": "user.props.force_change_password",
    "model": "o.forceChangePassword",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "password",
    "label": "user.props.password",
    "model": "o.password",
    "inputType": "password",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "input",
    "name": "password_confirmation",
    "label": "user.props.password_confirmation",
    "model": "o.passwordConfirmation",
    "inputType": "password",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Utility.Todo": {
  "preRequisite": [
   "customFields"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "title",
    "label": "utility.todo.props.title",
    "model": "o.title",
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   },
   {
    "type": "date",
    "name": "due_date",
    "label": "utility.todo.props.due_date",
    "model": "o.dueDate",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "when": null
   },
   {
    "type": "date",
    "name": "due_time",
    "label": "utility.todo.props.due_time",
    "model": "o.dueTime",
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "when": null
   }
  ]
 },
 "Employee.LeaveAllocation": {
  "preRequisite": [
   "leaveTypes"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select-search",
    "name": "employee",
    "rowKey": null,
    "label": "global.select",
    "labelAttr": "employee.employee",
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": "uuid",
    "searchAction": "employee/list",
    "endpoint": "/app/employees",
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "date",
    "name": "date_between",
    "rowKey": null,
    "label": "general.date_between",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "textarea",
    "name": "description",
    "rowKey": null,
    "label": "employee.leave.allocation.props.description",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   }
  ]
 },
 "Employee.LeaveRequest": {
  "preRequisite": [
   "types"
  ],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "select",
    "name": "leave_type",
    "rowKey": null,
    "label": "global.select",
    "labelAttr": "employee.leave.type.type",
    "when": "mode==edit",
    "optionsKey": "types",
    "labelProp": null,
    "valueProp": "uuid",
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "date",
    "name": "date_between",
    "rowKey": null,
    "label": "general.date_between",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "switch",
    "name": "is_half_day",
    "rowKey": null,
    "label": "employee.leave.request.props.half_day",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "textarea",
    "name": "reason",
    "rowKey": null,
    "label": "employee.leave.request.props.reason",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   }
  ]
 },
 "Employee.LeaveType": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "rowKey": null,
    "label": "employee.leave.type.props.name",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "code",
    "rowKey": null,
    "label": "employee.leave.type.props.code",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "alias",
    "rowKey": null,
    "label": "employee.leave.type.props.alias",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "textarea",
    "name": "description",
    "rowKey": null,
    "label": "employee.leave.type.props.description",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   }
  ]
 },
 "Employee.ProfileEditRequest": {
  "preRequisite": [
   "genders",
   "bloodGroups",
   "religions",
   "categories",
   "castes",
   "maritalStatuses",
   "relations"
  ],
  "fieldsets": [
   {
    "legend": "contact.props.present_address",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "address-input",
      "name": null,
      "rowKey": null,
      "label": null,
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     }
    ]
   },
   {
    "legend": "contact.props.permanent_address",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "switch",
      "name": "same_as_present_address",
      "rowKey": null,
      "label": "contact.props.same_as_present_address",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     },
     {
      "type": "address-input",
      "name": null,
      "rowKey": null,
      "label": null,
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     }
    ]
   },
   {
    "legend": "contact.props.emergency_contact",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "emergency_contact.name",
      "rowKey": null,
      "label": "contact.props.emergency_contact_name",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     },
     {
      "type": "input",
      "name": "emergency_contact.contact_number",
      "rowKey": null,
      "label": "contact.props.emergency_contact_number",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     },
     {
      "type": "select",
      "name": "emergency_contact.relation",
      "rowKey": null,
      "label": "contact.props.relation",
      "labelAttr": null,
      "when": null,
      "optionsKey": "relations",
      "labelProp": "label",
      "valueProp": "value",
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "radio-group",
    "name": "gender",
    "rowKey": null,
    "label": null,
    "labelAttr": null,
    "when": null,
    "optionsKey": "genders",
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "date",
    "name": "birth_date",
    "rowKey": null,
    "label": "contact.props.birth_date",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": true,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "contact_number",
    "rowKey": null,
    "label": "contact.props.primary_contact_number",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "alternate_contact_number",
    "rowKey": null,
    "label": "contact.props.alternate_contact_number",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "email",
    "rowKey": null,
    "label": "contact.props.email",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "father_name",
    "rowKey": null,
    "label": "contact.props.father_name",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "mother_name",
    "rowKey": null,
    "label": "contact.props.mother_name",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "unique_id_number1",
    "rowKey": null,
    "label": null,
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "unique_id_number2",
    "rowKey": null,
    "label": null,
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "unique_id_number3",
    "rowKey": null,
    "label": null,
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "unique_id_number4",
    "rowKey": null,
    "label": null,
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "unique_id_number5",
    "rowKey": null,
    "label": null,
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "birth_place",
    "rowKey": null,
    "label": "contact.props.birth_place",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "nationality",
    "rowKey": null,
    "label": "contact.props.nationality",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "mother_tongue",
    "rowKey": null,
    "label": "contact.props.mother_tongue",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "select",
    "name": "blood_group",
    "rowKey": null,
    "label": "contact.props.blood_group",
    "labelAttr": null,
    "when": null,
    "optionsKey": "bloodGroups",
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "select",
    "name": "marital_status",
    "rowKey": null,
    "label": "contact.props.marital_status",
    "labelAttr": null,
    "when": null,
    "optionsKey": "maritalStatuses",
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "select",
    "name": "religion",
    "rowKey": null,
    "label": "global.select",
    "labelAttr": "contact.religion.religion",
    "when": null,
    "optionsKey": "religions",
    "labelProp": "name",
    "valueProp": "uuid",
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "select",
    "name": "category",
    "rowKey": null,
    "label": "global.select",
    "labelAttr": "contact.category.category",
    "when": null,
    "optionsKey": "categories",
    "labelProp": "name",
    "valueProp": "uuid",
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "select",
    "name": "caste",
    "rowKey": null,
    "label": "global.select",
    "labelAttr": "contact.caste.caste",
    "when": null,
    "optionsKey": "castes",
    "labelProp": "name",
    "valueProp": "uuid",
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   }
  ]
 },
 "Student.ProfileEditRequest": {
  "preRequisite": [
   "genders",
   "bloodGroups",
   "religions",
   "categories",
   "castes",
   "maritalStatuses"
  ],
  "fieldsets": [
   {
    "legend": "student.props.parent",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "father_contact_number",
      "rowKey": null,
      "label": "contact.props.contact_number",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     },
     {
      "type": "input",
      "name": "father_email",
      "rowKey": null,
      "label": "contact.props.email",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     },
     {
      "type": "date",
      "name": "father_birth_date",
      "rowKey": null,
      "label": "contact.props.birth_date",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     },
     {
      "type": "input",
      "name": "father_occupation",
      "rowKey": null,
      "label": "contact.props.occupation",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     },
     {
      "type": "input",
      "name": "father_annual_income",
      "rowKey": null,
      "label": "contact.props.annual_income",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     },
     {
      "type": "input",
      "name": "mother_contact_number",
      "rowKey": null,
      "label": "contact.props.contact_number",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     },
     {
      "type": "input",
      "name": "mother_email",
      "rowKey": null,
      "label": "contact.props.email",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     },
     {
      "type": "date",
      "name": "mother_birth_date",
      "rowKey": null,
      "label": "contact.props.birth_date",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     },
     {
      "type": "input",
      "name": "mother_occupation",
      "rowKey": null,
      "label": "contact.props.occupation",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     },
     {
      "type": "input",
      "name": "mother_annual_income",
      "rowKey": null,
      "label": "contact.props.annual_income",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     }
    ]
   },
   {
    "legend": "contact.props.present_address",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "address-input",
      "name": null,
      "rowKey": null,
      "label": null,
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     }
    ]
   },
   {
    "legend": "contact.props.permanent_address",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "switch",
      "name": "same_as_present_address",
      "rowKey": null,
      "label": "contact.props.same_as_present_address",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     },
     {
      "type": "address-input",
      "name": null,
      "rowKey": null,
      "label": null,
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     }
    ]
   },
   {
    "legend": "contact.props.emergency_contact",
    "when": null,
    "repeat": null,
    "fields": [
     {
      "type": "input",
      "name": "emergency_contact.name",
      "rowKey": null,
      "label": "contact.props.emergency_contact_name",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     },
     {
      "type": "input",
      "name": "emergency_contact.contact_number",
      "rowKey": null,
      "label": "contact.props.emergency_contact_number",
      "labelAttr": null,
      "when": null,
      "optionsKey": null,
      "labelProp": null,
      "valueProp": null,
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": "text",
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     },
     {
      "type": "select",
      "name": "emergency_contact.relation",
      "rowKey": null,
      "label": "contact.props.relation",
      "labelAttr": null,
      "when": null,
      "optionsKey": "relations",
      "labelProp": "label",
      "valueProp": "value",
      "searchAction": null,
      "endpoint": null,
      "displayFormat": null,
      "inputType": null,
      "required": false,
      "currency": false,
      "noClear": false,
      "placeholder": null
     }
    ]
   }
  ],
  "looseFields": [
   {
    "type": "input",
    "name": "contact_number",
    "rowKey": null,
    "label": "contact.props.primary_contact_number",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "alternate_contact_number",
    "rowKey": null,
    "label": "contact.props.alternate_contact_number",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "email",
    "rowKey": null,
    "label": "contact.props.email",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "unique_id_number1",
    "rowKey": null,
    "label": null,
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "unique_id_number2",
    "rowKey": null,
    "label": null,
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "unique_id_number3",
    "rowKey": null,
    "label": null,
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "unique_id_number4",
    "rowKey": null,
    "label": null,
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "unique_id_number5",
    "rowKey": null,
    "label": null,
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "birth_place",
    "rowKey": null,
    "label": "contact.props.birth_place",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "nationality",
    "rowKey": null,
    "label": "contact.props.nationality",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "input",
    "name": "mother_tongue",
    "rowKey": null,
    "label": "contact.props.mother_tongue",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "select",
    "name": "blood_group",
    "rowKey": null,
    "label": "contact.props.blood_group",
    "labelAttr": null,
    "when": null,
    "optionsKey": "bloodGroups",
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "select",
    "name": "religion",
    "rowKey": null,
    "label": "global.select",
    "labelAttr": "contact.religion.religion",
    "when": null,
    "optionsKey": "religions",
    "labelProp": "name",
    "valueProp": "uuid",
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "select",
    "name": "category",
    "rowKey": null,
    "label": "global.select",
    "labelAttr": "contact.category.category",
    "when": null,
    "optionsKey": "categories",
    "labelProp": "name",
    "valueProp": "uuid",
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   },
   {
    "type": "select",
    "name": "caste",
    "rowKey": null,
    "label": "global.select",
    "labelAttr": "contact.caste.caste",
    "when": null,
    "optionsKey": "castes",
    "labelProp": "name",
    "valueProp": "uuid",
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": null,
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   }
  ]
 },
 "Team.ConfigRole": {
  "preRequisite": [],
  "fieldsets": [],
  "looseFields": [
   {
    "type": "input",
    "name": "name",
    "rowKey": null,
    "label": "team.config.role.props.name",
    "labelAttr": null,
    "when": null,
    "optionsKey": null,
    "labelProp": null,
    "valueProp": null,
    "searchAction": null,
    "endpoint": null,
    "displayFormat": null,
    "inputType": "text",
    "required": false,
    "currency": false,
    "noClear": false,
    "placeholder": null
   }
  ]
 }
}

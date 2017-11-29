define([], function() {
	var mappings = {
        patient_information_deatils_discrepancies: 'Conflicting data at other site(s)',

		clinicalreminders_priority: 'Priority of the reminder, i.e. Chronic, Acute, or None',
		clinicalreminders_title: 'Reminder Name, i.e. Health factors, Immunization(s), Skin test, Patient education, Examination, Screening, Lab test, Radiology procedure, Order, Referral',
		clinicalreminders_type: 'Reminder',
		clinicalreminders_duedate: 'Date that reminder activity is due',
		clinicalreminders_donedate: 'Date that activity was completed',

		encounters_encounter: 'Type of encounter, i.e. Visits, Appointments, Admissions, Procedures',
		encounters_hxoccurance: 'The historical number of occurrences of this encounter type',
		encounters_last: 'Time since most recent encounter of each type',
		encounters_datetime: 'Date range of information represented in the timeline',
		encounters_activity: 'Test, order, other action',
		encounters_type: 'Category of information entered',
		encounters_enteredby: 'Person that entered information',
		encounters_facility: 'Abbreviated name of VA facility, or notation of DoD',

		reports_date: 'Date of report',
		reports_type: 'Specific report type, i.e. Dietetics, Imaging, Laboratory, Orders, Patient Information',
		reports_enteredby: 'Person that entered report',
		reports_facility: 'Abbreviated name of VA facility at which report was entered, or notation of report at DoD facility',
		reports_description: 'Detailed information related to the Type of report',

		conditions_problem: 'Short description of the problem',
		conditions_acuity: 'Acuity of the Problem, i.e. Acute, Chronic',
		conditions_last: 'Timeframe problem last noted, i.e. 6 months, 3 months, 1 week',
		conditions_hxoccurance: 'The number of occurrences of this condition',
		conditions_description: 'Detailed information related to the condition',
		conditions_standardizeddescription: 'Standardized name of condition to support business functions and data sharing',
		conditions_onsetdate: 'Date the condition first began',
		conditions_lastupdated: 'Date information on the condition was last updated',
		conditions_provider: 'Name of the provider treating the condition',
		conditions_facility: 'Abbreviated name of VA facility at which condition was reported, or notation of condition at DoD facility',
		conditions_onset: 'Problem onset',
		conditions_status: 'Status of the problem',

		medications_medication: 'Name of medication',
		medications_refills: 'Number of refills',
		medications_change: 'Type of change since original prescription, i.e. Discontinued, Expired',
		medications_last: 'Timeframe of last change, i.e. 6 months, 3 months, 1 week, 1 day',
		medications_facility: 'Facility at which medication was prescribed',
		medications_name: 'Name of medication',
		medications_status: 'Status of the medication',
		medications_sig: 'Name, dosage and instructions on use of the prescription',
		medications_fillable: 'If VA, then status (discontinued, expired) or fillable info and timeframe shown; medication prescribed outside of VA states "Non VA"',
		medications_next: 'Prescription status (discontinued, expired) or timeframe of next dosage',

		vitals_type: 'Type of vital collected, i.e. Blood Pressure, Pain, Weight',
		vitals_results: 'Data captured in relation to the vital measured',
		vitals_result: 'Data captured in relation to the vital measured',
		vitals_last: 'Timeframe vital was last collected',
		vitals_dateobserved: 'Date and time vital was collected',
		vitals_dateentered: 'Date and time vital was entered into the system',
		vitals_qualifiers: 'A word that further defines the vital sign',
		vitals_facility: 'Facility at which vital was collected',

		immunizations_vaccinename: 'Short name of the vaccine',
		immunizations_reaction: 'Reaction reported post vaccine administration',
		immuninizations_date: 'Date vaccine administered',
		immuninizations_facility: 'Abbreviated name of VA facility at which vaccine was administered, or notation of administration at DoD',
		immuninizations_standardizedname: 'Standardized name of vaccine to support business functions and data sharing',
		immuninizations_series: 'Number in series of vaccine to be administered',
		immuninizations_repeatcontraindicated: '"Yes" if series/repeat administration is to be discontinued, "No" if series/repeat administration can be continued',

		allergies_allergenName: 'Name of vaccine, medication, material, food, agent, etc. that causes an allergic reaction',
		allergies_reaction: 'Reaction to allergen reported, i.e. nausea, vomiting, rash, anxiety, dry mouth',
		allergies_severity: 'Mild, Moderate, or Severe level of reaction',
		allergies_standardizedAllergen: 'Standardized name of allergen to support business functions and data sharing',
		allergies_drugClass: 'VA Drug Class File\'s product description',
		allergies_enteredBy: 'Person that entered allergen',
		allergies_facility: 'Facility at which allergen was reported',

		labresults_description: 'Name of lab test',
		labresults_results: 'Data captured in relation to the lab tested',
		labresults_last: 'Timeframe lab was last completed, i.e. 6 months, 3 months, 1 week, 1 day',
		labresults_date: 'Date and time lab test completed',
		labresults_labtest: 'Name of lab test',
		labresults_flag: 'Notification if the reported result is outside of the Reference Range',
		labresults_result: 'Link to the lab report which details the results of the test',
		labresults_unit: 'Unit of measure',
		labresults_refrange: 'The reference range of values for a physiologic measurement in healthy persons',
		labresults_facility: 'Facility at which lab was ordered',

		narrativelab_date: 'Lab Results Date',
		narrativelab_facility: 'Lab Results Facility',
		narrativelab_description: 'The description of the Lab Results',
		narrativelab_author: 'Author of Lab Results',
		narrativelab_type: 'Type of Lab Results',

		visits_date: 'Date and time of patient appointment/visit at location',
		visits_description: 'Overarching description of appointment/visit which primarily focuses on VA or DoD identifiers',
		visits_location: 'Location within hospital or notation of clinic at which appointment/visit occurred',
		visits_facility: 'Abbreviated name of VA facility at which appointment/visit occurred, or notation of occurrence at DoD',
		visits_type: 'Category of appointment/visit, i.e. Hospitalization, Compensation & Pension, General Medicine, Outpatient',
		visits_provider: 'Name of provider',
		visits_reason: 'Cause or explanation for patient\'s appointment/visit',
		visits_status: 'Status of patient appointment/visit at location',

		chs_date: 'Date associated with Health Summary',
		chs_authoringinstitution: 'Institution which collected data within the Health Summary, or Company which stores and distributes the patient\'s health data',
		chs_description: 'Type of Health Summary, i.e. Continuity of Care document, Summary of Episode note',

		orders_orderdate: 'Date the order is placed',
		orders_status: 'Identifies the specific status of the order out of the multiple options',
		orders_order: 'Description of order',
		orders_facility: 'Abbreviated name of VA facility at which order is entered, or notation of order entered at DoD',
		orders_providername: 'Name of provider',
		orders_startdate: 'Date the order is to be started',
		orders_stopdate: 'Date the order is to be stopped',
		orders_type: 'Overarching category of order, i.e. Dietetics, Laboratory, Medication',
		orders_flag: 'Identifies that this order has been flagged by a user',

		timeline_datetime: 'Date range of information represented in the timeline',
		timeline_activity: 'Test, order, other action',
		timeline_type: 'Category of information entered',
		timeline_enteredby: 'Person that entered information',
		timeline_facility: 'Abbreviated name of VA facility, or notation of DoD',

		documents_date: 'Date associated with document',
		documents_description: 'Detailed title for document type',
		documents_type: 'Category of document listed',
		documents_enteredby: 'Person that entered information',
		documents_facility: 'Abbreviated name of VA facility, or notation of DoD',
		documents_images: 'Identifies that an image is attached to the document',

		postings: 'Lettered boxes highlighted in yellow are active, whereas lettered boxes that are grayed out are inactive',
		timeline_dateinterval: 'Global date timeline: Set a date range to allow for easier investigation of records',
		timeline_graph: 'Global timeline graph: Shows patient\'s historical events and future appointments, represented as blue bars for outpatient data and green bars for inpatient data; the red line indicates the current date',

		toolbar_infobutton: 'More Information',
		toolbar_detailview: 'Details',
		toolbar_deletestackedgraph: 'Delete Stacked Graph',
		toolbar_tilesortbutton: 'Tile sort',
		toolbar_submenu: 'Submenu',
		toolbar_associatedworkspace: 'Associated Workspace',
		toolbar_quicklook: 'Quicklook',
		toolbar_addorders: 'Add orders',
		toolbar_addimmunizations: 'Add immunization',
		toolbar_addnewitem: 'Add New Item',
		toolbar_edititem: 'Edit Form',
		toolbar_crs: 'Highlight Related Items',
		toolbar_crs_icon: 'May Contain Related Items',
        toolbar_note_object: 'Create Note Object',

		patientSync_mySite: 'White checked circle indicates that MySite (the site you are operating from) health data is displayed',
		patientSync_allVA: 'White checked circle indicates that All VA (VA data nationally available) health data is displayed',
		patientSync_DoD: 'White checked circle indicates that DoD (data shared by the Department of Defense) health data is displayed',
		patientSync_community: 'White checked circle indicates that Community (data shared by private vendors) health data is displayed',

		sign_outpatientMeds_relatedTo_SC: 'Service Connected Condition (SC): Veterans are eligible for medical care for treatment of service-connected conditions without incurring copayment charges or payments against their insurance.\n\nClick here to toggle all enabled options in this column to Yes or No.',
		sign_outpatientMeds_relatedTo_CV: 'Combat Veteran (CV): To receive CV exemption the veteran must have served in combat operations after the Gulf War or in combat against a hostile force after November 11, 1998. In addition, the condition for which the veteran is treated must be related to that combat, the veteran must have registered as a combat veteran, and be within two years of separation from active military service. Finally, the condition must not be already considered to be service related or that exemption should apply.\n\nClick here to toggle all enabled options in this column to Yes or No.',
		sign_outpatientMeds_relatedTo_AO: 'Agent Orange (AO): herbicide used in Vietnam. Veterans who were present within the borders of the republic of Vietnam from January 1962 through May 1975 are presumed to have been exposed to Agent Orange and are eligible to receive care of conditions possibly for AO exposure without incurring copayment charges or claims against their insurance. Some conditions associated with AO exposure: diabetes (type 2), chloracne, porphyria cutanea tarda, peripheral neuropathy and some cancers.\n\nClick here to toggle all enabled options in this column to Yes or No.',
		sign_outpatientMeds_relatedTo_MST: 'Military Sexual Trauma (MST): Veterans who experienced sexual trauma while serving on active duty in the military are eligible to receive treatment and counseling services for the sexual trauma without incurring copayment charges or claims against their insurance.\n\nClick here to toggle all enabled options in this column to Yes or No.',
		sign_outpatientMeds_relatedTo_HNC: 'Head and Neck Cancer (HNC): Veterans with cancer of the head or neck and a history of receipt of Nasopharyngeal (NP) radium therapy while in the military are eligible to receive treatment for the head or neck cancer without incurring copayment charges or claims against their insurance.\n\nClick here to toggle all enabled options in this column to Yes or No.',
		sign_outpatientMeds_relatedTo_IR: 'Ionizing Radiation (IR): Veterans exposed to ionizing radiation (IR) as a POW or while on active duty at Hiroshima and/or Nagasaki, Japan, or who served at a nuclear device atmospheric testing site are eligible to receive care of any malignant condition and certain other non-malignant conditions for IR exposure without incurring copayment charges or claims against their insurance.\n\nClick here to toggle all enabled options in this column to Yes or No.',
		sign_outpatientMeds_relatedTo_SHD: 'Shipboard Hazard anbd Defense (SHD): Veterans with conditions recognized by VA as associated with Project 112/SHAD, shipboard and land-based biological and chemical testing conducted by the United States (U.S.) military between 1962 and 1973 are eligible for enrollment in priority group 6, unless eligible for enrollment in a higher priority. In addition, veterans receive care at no charge for care and medications provided for treatment of conditions related to exposure.\n\nClick here to toggle all enabled options in this column to Yes or No.',
		sign_outpatientMeds_relatedTo_SWAC: 'Southwest Asia Conditions (SWAC): Veterans who served in Southwest Asia during the Gulf War are eligible to receive treatment for conditions relating to this service, including exposure to depleted uranium, pesticides, anti-nerve gas pill, pyridostigmine bromide, infectious diseases, chemical and biological warfare agents, etc. without incurring copayment charges or claims against their insurance.\n\nClick here to toggle all enabled options in this column to Yes or No.',
		sign_outpatientMeds_relatedTo: 'SC - Service Connected Condition; CV - Combat Veteran; AO - Agent Orange Exposure; IR - Ionizing Radiation Exposure; SWAC - Southwest Asia Conditions; SHD - Shipboard Hazard and Defense; MST - Military Sexual Trauma; HNC - Head and/or Neck Cancer;',

		healthSummaries_facility: 'Name of the facility',
		healthSummaries_report: 'Name of the Report',
		healthSummaries_isPrimary: 'Is facility a primary site',
		healthSummaries_reportID: 'Report ID'

	};


	return mappings;
});
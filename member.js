function skillsMember() {
    var member = require('./member.js');
    var skill = require('./skill.js');

    var skills = {
        // returns a list of skills for a member
        getSkills: function(memberId) {
            return member.getSkills(memberId);
        },
        // adds a skill for a member
        addSkill: function(memberId, skillId) {
            return member.addSkill(memberId, skillId);
        },
        // removes a skill for a member
        removeSkill: function(memberId, skillId) {
            return member.removeSkill(memberId, skillId);
        },
        // returns a list of members for a skill
        getMembers: function(skillId) {
            return skill.getMembers(skillId);
        }
    };

    return skills;
} () {}
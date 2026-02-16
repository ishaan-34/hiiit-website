
export const pricingPlans = [
    {
        name: 'Core Plan',
        price: 450,
        billingPeriod: 'month',
        description: 'Everything you need to build organizational fitness with AI-powered insights and expert guidance.',
        id: 'corePlan',
        highlighted: true,
        ctaText: 'Start with the Core Plan',
        configuration: {
            teamPrice: 90,
            memberPrice: 5,
            baseTeams: 1,
            baseMembers: 10,
            membersPerTeam: 5
        },
        features: [
            'AI-powered organizational assessment and analysis',
            'Support for one team with up to 10 members',
            'Comprehensive dashboard with progress tracking',
            'Full assessment cycle with personalized recommendations',
            'Guided workshops and activities with structured inputs',
            'Integrated backlog and action tracking',
            'Two hours of senior advisory sessions'
        ]
    },
    {
        name: 'Organization Fitness Check',
        price: 250,
        billingPeriod: 'one-time',
        description: 'Check your organization and get a full analysis with recommendations.',
        id: 'fitnessCheck',
        ctaText: 'Get Fitness Check',
        configuration: {
            teamPrice: 50,
            memberPrice: 5,
            baseTeams: 1,
            baseMembers: 10,
            membersPerTeam: 0
        },
        features: [
            'Organization assessment',
            '40 respondants included',
            'Dashboard',
            'Assessment engine',
            'AI analysis',
            'Recommendations'
        ]
    }
];

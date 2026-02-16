import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calculator } from 'lucide-react';

interface Configuration {
    teamPrice: number;
    memberPrice: number;
    baseTeams: number;
    baseMembers: number;
    membersPerTeam: number;
}

interface Plan {
    id: string;
    price: number;
    name: string;
    billingPeriod: string;
    configuration: Configuration;
}

const InteractivePricingCalculator = ({ configuredPlan }: { configuredPlan: Plan }) => {
    const [additionalTeams, setAdditionalTeams] = useState(0);
    const [additionalMembers, setAdditionalMembers] = useState(0);

    useEffect(() => {
        setAdditionalTeams(0);
        setAdditionalMembers(0);
    }, [configuredPlan.id]);

    const {
        price: BASE_PRICE,
        name: PLAN_NAME,
        configuration
    } = configuredPlan;

    const {
        teamPrice: TEAM_PRICE,
        memberPrice: MEMBER_PRICE,
        baseTeams: BASE_TEAMS,
        baseMembers: BASE_MEMBERS,
        membersPerTeam: MEMBERS_PER_TEAM
    } = configuration;

    const totalTeams = BASE_TEAMS + additionalTeams;
    const totalMembers = BASE_MEMBERS + (additionalTeams * MEMBERS_PER_TEAM) + additionalMembers;
    const totalPrice = BASE_PRICE + (additionalTeams * TEAM_PRICE) + (additionalMembers * MEMBER_PRICE);

    return (
        <section className="py-20 bg-background min-h-screen flex items-center justify-center">
            <div className="w-full max-w-[800px] mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
                        <Calculator className="h-3 w-3 mr-1" />
                        Interactive Calculator
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Configure Your Plan
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Our pricing scales with you. Pick your teams and members—your price updates instantly.
                    </p>
                </div>

                <div className="bg-primary/5 rounded-xl overflow-hidden shadow-sm border border-primary/20">

                    <div className="px-8 pt-8 pb-4">
                        <h3 className="text-foreground text-xl font-semibold">Your Plan</h3>
                    </div>

                    <div className="px-8 pb-8 space-y-4">
                        <div className="flex items-center gap-4 text-muted-foreground text-[13px] border-b border-primary/20 pb-2">
                            <div className="flex-[2.5]"></div>
                            <div className="flex-1 text-center">$</div>
                            <div className="flex-1 text-center">Teams.</div>
                            <div className="flex-1 text-center">Team members</div>
                        </div>

                        <div className="flex items-center gap-4 p-5 bg-card rounded-lg shadow-sm">
                            <div className="flex-[2.5]">
                                <div className="text-foreground font-bold text-base">{PLAN_NAME}</div>
                                <div className="text-muted-foreground text-xs mt-0.5">{BASE_TEAMS} team + {BASE_MEMBERS} team members</div>
                            </div>
                            <div className="flex-1 text-center font-bold text-foreground">{BASE_PRICE}</div>
                            <div className="flex-1 text-center font-bold text-foreground">{BASE_TEAMS}</div>
                            <div className="flex-1 text-center font-bold text-foreground">{BASE_MEMBERS}</div>
                        </div>

                        <div className="flex items-center gap-4 py-2">
                            <div className="flex-[2.5]">
                                <div className="text-foreground font-bold text-base">Add teams</div>
                                <div className="text-muted-foreground text-xs mt-0.5">
                                    {MEMBERS_PER_TEAM > 0 ? `${MEMBERS_PER_TEAM} team members/team included` : 'No additional members included'}
                                </div>
                            </div>
                            <div className="flex-1 text-center font-bold text-foreground">{TEAM_PRICE}</div>
                            <div className="flex-1 flex justify-center">
                                <Input
                                    type="number"
                                    min="0"
                                    value={additionalTeams || ''}
                                    placeholder="0"
                                    onChange={(e) => setAdditionalTeams(parseInt(e.target.value) || 0)}
                                    className="w-16 h-10 text-center bg-card border-none rounded-md font-bold text-foreground focus-visible:ring-1 focus-visible:ring-primary"
                                />
                            </div>
                            <div className="flex-1 text-center font-bold text-foreground">{additionalTeams * MEMBERS_PER_TEAM}</div>
                        </div>

                        <div className="flex items-center gap-4 py-2">
                            <div className="flex-[2.5]">
                                <div className="text-foreground font-bold text-base">Add team members</div>
                            </div>
                            <div className="flex-1 text-center font-bold text-foreground">{MEMBER_PRICE}</div>
                            <div className="flex-1"></div>
                            <div className="flex-1 flex justify-center">
                                <Input
                                    type="number"
                                    min="0"
                                    value={additionalMembers || ''}
                                    placeholder="0"
                                    onChange={(e) => setAdditionalMembers(parseInt(e.target.value) || 0)}
                                    className="w-16 h-10 text-center bg-card border-none rounded-md font-bold text-foreground focus-visible:ring-1 focus-visible:ring-primary"
                                />
                            </div>
                        </div>

                        <div className="border-t border-primary/20 pt-4 flex items-center gap-4 text-foreground">
                            <div className="flex-[2.5] font-bold text-base">Total</div>
                            <div className="flex-1"></div>
                            <div className="flex-1 text-center font-bold text-base">{totalTeams}</div>
                            <div className="flex-1 text-center font-bold text-base">{totalMembers}</div>
                        </div>

                        <div className="pt-6 space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-foreground">Total</span>
                                <span className="text-primary text-5xl font-bold">${totalPrice}</span>
                            </div>

                            <div className="flex justify-end gap-2">
                                {configuredPlan.billingPeriod === 'month' && (
                                    <>
                                        <Badge variant="secondary" className="bg-destructive/10 text-destructive border-0 hover:bg-destructive/20 font-medium px-2 py-0.5 rounded text-[11px]">
                                            ${(totalPrice * 12).toLocaleString()}/year
                                        </Badge>
                                        <Badge variant="outline" className="border-primary/30 text-primary font-medium px-2 py-0.5 rounded text-[11px]">
                                            Save 15% with annual billing
                                        </Badge>
                                    </>
                                )}
                                {configuredPlan.billingPeriod === 'one-time' && (
                                    <Badge variant="outline" className="border-primary/30 text-primary font-medium px-2 py-0.5 rounded text-[11px]">
                                        One-time payment
                                    </Badge>
                                )}
                            </div>

                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold rounded-lg transition-all">
                                Get Started with {PLAN_NAME}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>

                            <p className="text-center text-muted-foreground text-[13px] font-medium pt-2">
                                No credit card required • Start your 14-day free trial
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractivePricingCalculator;

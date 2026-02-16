import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingCard = ({
    plan,
    onSelectPlan,
    onConfigurePlan,
    addOnInfo
}: {
    plan: any;
    onSelectPlan: (id: string) => void;
    onConfigurePlan: () => void;
    addOnInfo?: any;
}) => {
    return (
        <Card className={`relative bg-card border-border w-full md:w-[500px] ${plan.highlighted ? 'ring-2 ring-primary shadow-lg' : ''}`}>
            <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="pt-4">
                    {plan.price === 0 ? <div className="text-3xl font-bold text-foreground">Custom</div> : <>
                        <div className="text-4xl font-bold text-foreground">
                            ${plan.price}
                            {plan.billingPeriod !== 'one-time' && <span className="text-lg font-normal text-muted-foreground">/{plan.billingPeriod}</span>}
                        </div>
                        {plan.billingPeriod === 'one-time' && <div className="text-sm text-muted-foreground">One-time payment</div>}
                        {plan.credits && <div className="text-sm text-primary mt-2">
                            {plan.credits.included} credits included monthly
                        </div>}
                    </>}
                </div>
            </CardHeader>

            <CardContent className="pt-0 min-h-[15rem]">
                <div className="space-y-3 mt-3">
                    {plan.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlighted ? 'bg-primary/10' : 'bg-secondary'
                                    }`}>
                                    <Check className={`w-3.5 h-3.5 ${plan.highlighted ? 'text-primary' : 'text-secondary-foreground'
                                        } stroke-[3]`} />
                                </div>
                            </div>
                            <span className="text-sm text-foreground">{feature}</span>
                        </div>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="flex-col gap-4">
                <Button
                    className={`w-full ${plan.tier === 'fitness_check' ? 'bg-sky-100 hover:bg-sky-200 text-foreground border-sky-200' : ''}`}
                    variant={plan.highlighted ? 'default' : plan.tier === 'fitness_check' ? 'default' : 'outline'}
                    onClick={() => onSelectPlan(plan.id)}
                >
                    {plan.ctaText}
                </Button>

                {addOnInfo && <div className="w-full pt-4 border-t border-border text-left space-y-3">
                    <div className="space-y-2">
                        {addOnInfo.teams && <div className="flex items-baseline gap-2">
                            <span className="text-sm text-foreground">Add teams {addOnInfo.teams.price}/team monthly</span>
                            {addOnInfo.teams.features && addOnInfo.teams.features.length > 0 && <span className="text-xs text-muted-foreground">
                                {addOnInfo.teams.features.join(', ')}
                            </span>}
                        </div>}

                        {addOnInfo.members && <div className="text-sm text-foreground">
                            Add teams members {addOnInfo.members.description}
                        </div>}
                    </div>

                    <Button
                        variant={plan.highlighted ? 'default' : plan.tier === 'fitness_check' ? 'default' : 'outline'}
                        className={`w-full ${plan.tier === 'fitness_check'
                            ? 'bg-sky-100 hover:bg-sky-200 text-foreground border-sky-200'
                            : ''
                            }`}
                        onClick={onConfigurePlan}>
                        Configure your plan
                    </Button>
                </div>}
            </CardFooter>
        </Card>
    );
};

export default PricingCard;

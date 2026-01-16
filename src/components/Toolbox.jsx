import { memo } from 'react';
import { PenTool, TrendingUp, Cpu, Globe, Layout, Search, Mail, MessageSquare } from 'lucide-react';

const toolboxCategories = [
    {
        title: 'Design & Editing',
        icon: PenTool,
        color: 'text-purple-500',
        tools: [
            { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma' },
            { name: 'Canva', icon: 'https://cdn.simpleicons.org/canva' },
            { name: 'InDesign', icon: 'https://cdn.simpleicons.org/adobeindesign' },
            { name: 'Photoshop', icon: 'https://cdn.simpleicons.org/adobephotoshop' },
            { name: 'Premiere Pro', icon: 'https://cdn.simpleicons.org/adobepremierepro' },
            { name: 'Final Cut Pro', icon: 'https://cdn.simpleicons.org/apple' },
        ]
    },
    {
        title: 'Marketing & Growth',
        icon: TrendingUp,
        color: 'text-disha-red',
        tools: [
            { name: 'Google Ads', icon: 'https://cdn.simpleicons.org/googleads' },
            { name: 'Meta Ads', icon: 'https://cdn.simpleicons.org/meta' },
            { name: 'SemRush', icon: 'https://cdn.simpleicons.org/semrush' },
            { name: 'MoEngage', icon: null, fallback: Globe },
            { name: 'Zoho CRM', icon: 'https://cdn.simpleicons.org/zoho' },
            { name: 'SendGrid', icon: 'https://cdn.simpleicons.org/sendgrid' },
        ]
    },
    {
        title: 'Management & AI',
        icon: Cpu,
        color: 'text-disha-yellow',
        tools: [
            { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion' },
            { name: 'Jira', icon: 'https://cdn.simpleicons.org/jira' },
            { name: 'Confluence', icon: 'https://cdn.simpleicons.org/confluence' },
            { name: 'GPT-4', icon: 'https://cdn.simpleicons.org/openai' },
            { name: 'Claude', icon: 'https://cdn.simpleicons.org/anthropic' },
            { name: 'Perplexity', icon: 'https://cdn.simpleicons.org/perplexity' },
        ]
    },
];

const Toolbox = memo(() => {
    return (
        <section className="py-24 px-6 md:px-24 bg-cream dark:bg-charcoal transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">The <span className="text-disha-red">Toolbox</span></h3>
                    <p className="text-lg opacity-70 leading-relaxed max-w-2xl">
                        A hybrid workflow combining traditional design precision with modern AI efficiency and robust
                        management platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {toolboxCategories.map((category, idx) => {
                        const CategoryIcon = category.icon;
                        return (
                            <div key={idx} className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`p-3 rounded-xl bg-white dark:bg-white/5 shadow-sm ${category.color}`}>
                                        <CategoryIcon className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold font-display">{category.title}</h4>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {category.tools.map((tool, tIdx) => (
                                        <div
                                            key={tIdx}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-disha-red/30 hover:shadow-md transition-all duration-300 group"
                                        >
                                            <div className="w-8 h-8 flex items-center justify-center shrink-0">
                                                {tool.icon ? (
                                                    <img
                                                        src={tool.icon}
                                                        alt={tool.name}
                                                        className="w-full h-full object-contain filter dark:invert opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                                                    />
                                                ) : (
                                                    <tool.fallback className="w-5 h-5 text-gray-400 group-hover:text-disha-red transition-colors" />
                                                )}
                                            </div>
                                            <span className="text-sm font-medium text-charcoal/80 dark:text-cream/80 group-hover:text-charcoal dark:group-hover:text-white transition-colors">
                                                {tool.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
});

Toolbox.displayName = 'Toolbox';

export default Toolbox;
